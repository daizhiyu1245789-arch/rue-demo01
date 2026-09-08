import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const projectRoot=process.env.RUE_GUIDE_PROJECT_ROOT || path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const filename=process.argv.find(arg=>arg.endsWith('.html')) || path.join(projectRoot,'RUE_SOURCE_GUIDE.html');
const html=fs.readFileSync(filename,'utf8');
const match=html.match(/<script type="application\/json" id="guide-data">([\s\S]*?)<\/script>/);
assert.ok(match,'Embedded guide data missing');
const data=JSON.parse(match[1]);
const themes=Object.entries(data).filter(([key])=>key!=='definitions');
assert.equal(themes.length,20,'All 20 themes must remain available');
const files=new Map();
let rows=0,sourceLinks=0,externalBoundaries=0;
for(const [key,flow] of themes){
  assert.ok(flow.title&&flow.rows.length,key+' is empty');
  for(const [index,row] of flow.rows.entries()){
    const label=key+'.'+(index+1);
    assert.ok(row.title&&row.kind&&row.section&&row.note,label+' is incomplete');
    assert.ok(Number.isInteger(row.originalStep)&&row.originalStep>0,label+' has no deep link mapping');
    if(row.definitionId)assert.ok(data.definitions[row.definitionId]?.code,label+' definition missing');
    if(row.file){
      assert.match(row.file,/^(app|node_modules)\//);
      const resolved=path.resolve(projectRoot,row.file);
      assert.ok(resolved.startsWith(path.resolve(projectRoot)+path.sep),'Source escapes project');
      if(!files.has(resolved))files.set(resolved,fs.readFileSync(resolved,'utf8').split(/\r?\n/));
      const lines=files.get(resolved);
      assert.ok(row.line>0&&row.line<=lines.length,label+' invalid source line');
      const snapshot=row.code.split('\n');
      snapshot.forEach((line,n)=>assert.equal(line.trim(),lines[row.line-1+n]?.trim(),label+' source changed at '+row.file+':'+(row.line+n)));
      if(process.argv.includes('--sources'))console.log(label+' '+row.title+' | '+row.file+':'+row.line);
      sourceLinks++;
    }else{
      assert.ok(row.boundary,label+' needs an explicit external boundary');
      externalBoundaries++;
    }
    rows++;
  }
}
const ids=[...html.matchAll(/\bid="([^"\s]+)"/g)].map(m=>m[1]).filter(id=>!id.includes("'"));
for(const id of ['guide-data','flow','title','subtitle','sections','track','end'])assert.ok(ids.includes(id),'Missing element '+id);
for(const script of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(script[1]);
console.log(JSON.stringify({themes:themes.length,rows,sourceLinks,sourceFiles:files.size,externalBoundaries,fullFunctions:Object.keys(data.definitions).length,syntax:'OK',sourceSnapshots:'OK'},null,2));
