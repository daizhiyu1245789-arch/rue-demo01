/* Reading hierarchy; leaf numbers always refer to the current complete flow. */
globalThis.rueSourceGuide.buildMindmap = function buildMindmap(key) {
  const rows = globalThis.rueSourceGuide.data[key].rows;
  const group = (title, summary, start, end) => ({title, summary, nodes:rows.slice(start-1,end).map((row,index)=>({row,number:start+index}))});
  if(key==='mount') return [
    {title:'第一段：应用进入 Rue',summary:'准备运行时与容器，沿回调进入根渲染。',groups:[
      group('01 · 应用与运行时准备','useApp(RootApp) → 复用 / 创建 runtime → 包装 mount → use(router)',1,11),
      group('02 · 解析并预留容器',"mount('#app') → normalizeContainer → reserveAppContainer → 清空容器",12,18),
      group('03 · 建立运行时上下文','runWithClientRuntime → runWithRuntime → contextRunner → mountRunner',19,25),
      group('04 · Runtime 挂载入口','appRue.mount → wrappedRuntimeEntry → 原始 mount',26,29),
      group('05 · 应用控制器与根回调','appController.mount → plugins.flush → render(app) → root 回调',30,36),
      group('06 · 准备渲染输入','createElementMountInput → storeMountInput → recordInput → runRenderEntry',37,43),
    ]},
    {title:'第二段：页面变成 HTML',summary:'挂载组件，执行 Vapor setup，把生成的 DOM 提交到 #app。',groups:[
      group('07 · 根容器与组件分派','renderContainer → createHost → mountInput(component) → mountComponent',44,50),
      group('08 · 执行组件与 Hook 上下文','renderSubtree → renderComponent → components.render → renderHooks → RootApp(props)',51,65),
      group('09 · 处理组件返回值','创建期生命周期 → normalizeComponentResult → mountSubtree → mountInput(vapor)',66,70),
      group('10 · 执行 Vapor setup','mountVapor → runVaporSetup → wrappedSetup → withDOMHostOperations → 生成的 setup',71,76),
      group('11 · 子树返回与上下文恢复','setup 返回 → 恢复 scope / Hook → 登记 mounted → 组件 record 返回',77,85),
      group('12 · 提交真实 DOM','renderContainer 接住 mounted → commitMountedContainer → adapter.appendChild → #app',86,89),
    ]},
    {title:'第三段：生命周期与返回收尾',summary:'保存挂载记录，通知 mounted，再逐层恢复并返回 main.ts。',groups:[
      group('13 · 保存结果并通知生命周期','containerMounts.set → renderDepth 归零 → 组件 mounted → 全局 mounted',90,96),
      group('14 · 完成事务与退出包装','标记事务 mounted → 恢复 activeAppMount → 检查 pending error → 入口深度减一',97,100),
      group('15 · 确认容器并返回应用','popCurrentContainer → 恢复 runtime → confirmAppContainer → 清空 pending → main.ts',101,105),
    ]},
  ];
  const groups=[];
  rows.forEach((row,index)=>{
    if(!groups.length||groups[groups.length-1].title!==row.section)groups.push({title:row.section,summary:row.note,nodes:[]});
    groups[groups.length-1].nodes.push({row,number:index+1});
  });
  return [{title:'按执行段展开',summary:'每个分支对应原顺序图中的一个执行段，保留全部源码节点与条件边界。',groups}];
};
