import fs from 'node:fs';
const dir=new URL('./',import.meta.url);
for(const name of fs.readdirSync(dir).filter(n=>/^mount-explanations-\d+-\d+\.ts$/.test(n))){
  const source=fs.readFileSync(new URL(name,dir),'utf8');
  const part=JSON.parse(source.slice(source.indexOf('=')+1).trim().replace(/;$/,''));
  fs.writeFileSync(new URL('generated/'+name.replace('.ts','.js'),dir),'Object.assign(rueSourceGuide.mountExplanations, '+JSON.stringify(part,null,2)+');\n');
}
console.log('应用挂载解读已同步到浏览器资源');
