import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const html=fs.readFileSync(path.join(root,'RUE_SOURCE_GUIDE.html'),'utf8');
const context=vm.createContext({});
for(const [,relative] of html.matchAll(/<script defer src="(.*?)"><\/script>/g)){
  const source=fs.readFileSync(path.resolve(root,relative),'utf8');
  new vm.Script(source,{filename:relative});
  if(!relative.endsWith('/reader.js'))vm.runInContext(source,context);
}
const {data,buildMindmap}=context.rueSourceGuide;
let themes=0,nodes=0;
for(const [key,flow] of Object.entries(data)){
  if(key==='definitions')continue;
  const phases=buildMindmap(key);
  const leaves=phases.flatMap(phase=>phase.groups.flatMap(group=>group.nodes));
  assert.equal(leaves.length,flow.rows.length,key+' must cover every source node');
  leaves.forEach(({row,number},index)=>{
    assert.equal(number,index+1,key+' missing, duplicated or reordered node');
    assert.equal(row,flow.rows[index],key+' leaf must reference the actual source row');
  });
  if(key==='mount'){
    assert.equal(phases.length,3);
    assert.equal(phases.flatMap(phase=>phase.groups).length,15);
    assert.match(phases[0].title,/应用进入 Rue/);
    assert.match(phases[1].title,/页面变成 HTML/);
  }
  themes++;nodes+=leaves.length;
}
console.log(JSON.stringify({themes,nodes,coverage:'complete',scriptSyntax:'OK'},null,2));
