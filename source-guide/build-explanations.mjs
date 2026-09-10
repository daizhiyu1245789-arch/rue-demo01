import fs from 'node:fs';
const dir=new URL('./',import.meta.url);
for(const name of fs.readdirSync(dir).filter(n=>/^mount-explanations-\d+-\d+\.ts$/.test(n))){
  const source=fs.readFileSync(new URL(name,dir),'utf8');
  const part=JSON.parse(source.slice(source.indexOf('=')+1).trim().replace(/;$/,''));
  fs.writeFileSync(new URL('generated/'+name.replace('.ts','.js'),dir),'Object.assign(rueSourceGuide.mountExplanations, '+JSON.stringify(part,null,2)+');\n');
}
console.log('应用挂载解读已同步到浏览器资源');

const compileSource=fs.readFileSync(new URL('compile-explanations.ts',dir),'utf8');
const compilePart=JSON.parse(compileSource.slice(compileSource.indexOf('=')+1).trim().replace(/;$/,''));
fs.writeFileSync(new URL('generated/compile-explanations.js',dir),'rueSourceGuide.compileExplanations = '+JSON.stringify(compilePart,null,2)+';\n');

await import('./build-flow-explanations.mjs')
console.log('全部主题执行解读已同步到浏览器资源');

await import('./build-minimal-implementations.mjs')
console.log('全部主题最小实现已同步到浏览器资源');
