(() => {
  'use strict';
  const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
  globalThis.rueSourceGuide.createSourceGraph=({viewport,zoomOutput})=>{
    const expandedByKey=new Map();
    let key='';
    let phases=[];
    let scale=1;
    let panX=0;
    let panY=0;
    let stage;
    let canvasWidth=2700;
    let canvasHeight=1000;
    let visibleBounds={left:0,top:0,right:2700,bottom:1000};
    let dragging=false;
    let pointerId=0;
    let lastX=0;
    let lastY=0;
    const expanded=()=>{
      if(!expandedByKey.has(key))expandedByKey.set(key,new Set());
      return expandedByKey.get(key);
    };
    const applyTransform=()=>{
      if(stage)stage.style.transform=`translate(${panX}px,${panY}px) scale(${scale})`;
      zoomOutput.textContent=Math.round(scale*100)+'%';
    };
    const edge=(from,to,side,kind)=>{
      const startX=side==='left'?from.x:from.x+from.width;
      const endX=side==='left'?to.x+to.width:to.x;
      const startY=from.y+from.height/2;
      const endY=to.y+to.height/2;
      const bend=(startX+endX)/2;
      return `<path class="graph-edge graph-edge-${kind}" d="M${startX},${startY} C${bend},${startY} ${bend},${endY} ${endX},${endY}"/>`;
    };
    const layout=()=>{
      const root={id:'root',type:'root',x:1240,y:0,width:220,height:104};
      const nodes=[];
      const edges=[];
      const phaseLayouts=[];
      let maxY=0;
      for(const side of ['left','right']){
        let cursor=80;
        phases.forEach((phase,phaseIndex)=>{
          const phaseSide=phaseIndex%2===0?'left':'right';
          if(phaseSide!==side)return;
          const branchLayouts=[];
          phase.groups.forEach((group,groupIndex)=>{
            const id=`p${phaseIndex}-g${groupIndex}`;
            const open=expanded().has(id);
            const blockHeight=open?Math.max(96,group.nodes.length*60+10):96;
            const branch={id,type:'branch',phaseIndex,groupIndex,group,side,width:310,height:74,x:side==='left'?560:1830,y:cursor+(blockHeight-74)/2,open};
            branchLayouts.push(branch);nodes.push(branch);
            if(open){
              const leafX=side==='left'?90:2260;
              const startY=cursor+(blockHeight-group.nodes.length*60)/2;
              group.nodes.forEach((entry,nodeIndex)=>{
                const leaf={id:`${id}-n${nodeIndex}`,type:'leaf',entry,side,width:350,height:48,x:leafX,y:startY+nodeIndex*60};
                nodes.push(leaf);edges.push({from:branch,to:leaf,side,kind:'leaf'});
              });
            }
            cursor+=blockHeight+18;
          });
          const centers=branchLayouts.map(item=>item.y+item.height/2);
          const phaseNode={id:`p${phaseIndex}`,type:'phase',phase,phaseIndex,side,width:270,height:88,x:side==='left'?930:1500,y:(centers.reduce((sum,value)=>sum+value,0)/centers.length)-44};
          phaseLayouts.push(phaseNode);nodes.push(phaseNode);
          branchLayouts.forEach(branch=>edges.push({from:phaseNode,to:branch,side,kind:'branch'}));
          cursor+=58;
        });
        maxY=Math.max(maxY,cursor);
      }
      canvasHeight=Math.max(760,maxY+80);
      root.y=canvasHeight/2-root.height/2;
      nodes.push(root);
      phaseLayouts.forEach(phase=>edges.push({from:root,to:phase,side:phase.side,kind:'phase'}));
      return {root,nodes,edges};
    };
    const nodeHtml=node=>{
      if(node.type==='root')return `<div class="graph-node graph-root" style="left:${node.x}px;top:${node.y}px;width:${node.width}px;height:${node.height}px"><small>RUE SOURCE</small><strong>${escapeHtml(globalThis.rueSourceGuide.graphLabel)}</strong><span>${globalThis.rueSourceGuide.data[key].rows.length} 个源码节点</span></div>`;
      if(node.type==='phase')return `<button type="button" class="graph-node graph-phase graph-${node.side}" data-phase="${node.phaseIndex}" style="left:${node.x}px;top:${node.y}px;width:${node.width}px;height:${node.height}px"><small>${String(node.phaseIndex+1).padStart(2,'0')} · 执行阶段</small><strong>${escapeHtml(node.phase.title)}</strong><span>${node.phase.groups.length} 个分支</span></button>`;
      if(node.type==='branch')return `<button type="button" class="graph-node graph-branch graph-${node.side}" data-branch="${node.id}" aria-expanded="${node.open}" style="left:${node.x}px;top:${node.y}px;width:${node.width}px;height:${node.height}px"><span class="graph-toggle">${node.open?'−':'＋'}</span><strong>${escapeHtml(node.group.title)}</strong><small>${escapeHtml(node.group.summary)}</small><em>${node.group.nodes.length}</em></button>`;
      const {row,number}=node.entry;
      return `<a class="graph-node graph-leaf graph-${node.side}" href="#flow=${key}&view=sequence&node=${number}" style="left:${node.x}px;top:${node.y}px;width:${node.width}px;height:${node.height}px"><span>${String(number).padStart(2,'0')}</span><strong>${escapeHtml(row.title)}</strong><small>${escapeHtml(row.kind)}</small></a>`;
    };
    const draw=({fit=false,preserveCenter=false}={})=>{
      let center;
      if(preserveCenter)center={x:(viewport.clientWidth/2-panX)/scale,y:(viewport.clientHeight/2-panY)/scale};
      const layoutResult=layout();
      visibleBounds=layoutResult.nodes.reduce((bounds,node)=>({left:Math.min(bounds.left,node.x),top:Math.min(bounds.top,node.y),right:Math.max(bounds.right,node.x+node.width),bottom:Math.max(bounds.bottom,node.y+node.height)}),{left:canvasWidth,top:canvasHeight,right:0,bottom:0});
      viewport.innerHTML=`<div class="graph-stage" style="width:${canvasWidth}px;height:${canvasHeight}px"><svg class="graph-lines" viewBox="0 0 ${canvasWidth} ${canvasHeight}" aria-hidden="true">${layoutResult.edges.map(item=>edge(item.from,item.to,item.side,item.kind)).join('')}</svg><div class="graph-nodes">${layoutResult.nodes.map(nodeHtml).join('')}</div></div><p class="sr-only">${escapeHtml(globalThis.rueSourceGuide.graphLabel)}思维导图，共 ${layoutResult.nodes.length} 个当前可见节点。点击阶段可展开或收起所属分支，点击函数节点进入完整源码。</p>`;
      stage=viewport.querySelector('.graph-stage');
      if(center){panX=viewport.clientWidth/2-center.x*scale;panY=viewport.clientHeight/2-center.y*scale;}
      applyTransform();
      if(fit)requestAnimationFrame(()=>fitView());
    };
    const fitView=()=>{
      const padding=36;
      const visibleWidth=visibleBounds.right-visibleBounds.left;
      const visibleHeight=visibleBounds.bottom-visibleBounds.top;
      scale=clamp(Math.min((viewport.clientWidth-padding*2)/visibleWidth,(viewport.clientHeight-padding*2)/visibleHeight),.32,1);
      panX=(viewport.clientWidth-visibleWidth*scale)/2-visibleBounds.left*scale;
      panY=(viewport.clientHeight-visibleHeight*scale)/2-visibleBounds.top*scale;
      applyTransform();
    };
    const zoomTo=(next,clientX=viewport.getBoundingClientRect().left+viewport.clientWidth/2,clientY=viewport.getBoundingClientRect().top+viewport.clientHeight/2)=>{
      const rect=viewport.getBoundingClientRect();
      const x=clientX-rect.left;
      const y=clientY-rect.top;
      const graphX=(x-panX)/scale;
      const graphY=(y-panY)/scale;
      scale=clamp(next,.3,1.8);
      panX=x-graphX*scale;
      panY=y-graphY*scale;
      applyTransform();
    };
    viewport.addEventListener('click',event=>{
      const branch=event.target.closest('[data-branch]');
      if(branch){const state=expanded();const id=branch.dataset.branch;state.has(id)?state.delete(id):state.add(id);draw({fit:true});return;}
      const phase=event.target.closest('[data-phase]');
      if(phase){
        const index=Number(phase.dataset.phase);const ids=phases[index].groups.map((_,groupIndex)=>`p${index}-g${groupIndex}`);const state=expanded();const shouldExpand=ids.some(id=>!state.has(id));ids.forEach(id=>shouldExpand?state.add(id):state.delete(id));draw({fit:true});
      }
    });
    viewport.addEventListener('wheel',event=>{event.preventDefault();zoomTo(scale*(event.deltaY>0?.9:1.1),event.clientX,event.clientY);},{passive:false});
    viewport.addEventListener('pointerdown',event=>{
      if(event.target.closest('a,button'))return;
      dragging=true;pointerId=event.pointerId;lastX=event.clientX;lastY=event.clientY;viewport.setPointerCapture(pointerId);viewport.classList.add('is-dragging');
    });
    viewport.addEventListener('pointermove',event=>{if(!dragging||event.pointerId!==pointerId)return;panX+=event.clientX-lastX;panY+=event.clientY-lastY;lastX=event.clientX;lastY=event.clientY;applyTransform();});
    const endDrag=event=>{if(!dragging||event.pointerId!==pointerId)return;dragging=false;viewport.classList.remove('is-dragging');};
    viewport.addEventListener('pointerup',endDrag);viewport.addEventListener('pointercancel',endDrag);
    new ResizeObserver(()=>{if(key)fitView();}).observe(viewport);
    return {
      render(nextKey,label){const changed=nextKey!==key;key=nextKey;globalThis.rueSourceGuide.graphLabel=label;phases=globalThis.rueSourceGuide.buildMindmap(key);draw({fit:changed});},
      expandAll(){phases.forEach((phase,phaseIndex)=>phase.groups.forEach((_,groupIndex)=>expanded().add(`p${phaseIndex}-g${groupIndex}`)));draw({fit:true});},
      collapseAll(){expanded().clear();draw({fit:true});},
      fit:fitView,
      zoom(delta){zoomTo(scale+delta);},
    };
  };
})();
