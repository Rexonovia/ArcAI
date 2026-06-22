const fs = require('fs');
const glob = require('fs').readdirSync;
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');
  fs.writeFileSync(filePath, content, 'utf8');
}

function walkSync(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkSync(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      fixFile(filePath);
    }
  }
}

walkSync('c:\\Users\\vikas\\Desktop\\ArcAI\\src');
console.log('Fixed files');
