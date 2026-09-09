const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const map = [
  [/\bml-([a-zA-Z0-9.\-\[\]]+)\b/g, 'ms-$1'],
  [/\bmr-([a-zA-Z0-9.\-\[\]]+)\b/g, 'me-$1'],
  [/\bpl-([a-zA-Z0-9.\-\[\]]+)\b/g, 'ps-$1'],
  [/\bpr-([a-zA-Z0-9.\-\[\]]+)\b/g, 'pe-$1'],
  [/\bborder-l-([a-zA-Z0-9.\-\[\]]+)\b/g, 'border-s-$1'],
  [/\bborder-r-([a-zA-Z0-9.\-\[\]]+)\b/g, 'border-e-$1'],
  [/\bleft-([a-zA-Z0-9.\-\[\]]+)\b/g, 'start-$1'],
  [/\bright-([a-zA-Z0-9.\-\[\]]+)\b/g, 'end-$1'],
  [/\b-left-([a-zA-Z0-9.\-\[\]]+)\b/g, '-start-$1'],
  [/\b-right-([a-zA-Z0-9.\-\[\]]+)\b/g, '-end-$1'],
  [/\brounded-l-([a-zA-Z0-9.\-\[\]]+)\b/g, 'rounded-s-$1'],
  [/\brounded-r-([a-zA-Z0-9.\-\[\]]+)\b/g, 'rounded-e-$1'],
  [/\btext-left\b/g, 'text-start'],
  [/\btext-right\b/g, 'text-end'],
];

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    map.forEach(([regex, replaceStr]) => {
      content = content.replace(regex, replaceStr);
    });
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
