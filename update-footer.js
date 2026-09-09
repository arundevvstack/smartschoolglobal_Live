const fs = require('fs');

let content = fs.readFileSync('src/components/layout/footer.tsx', 'utf8');

// Replace standard colors with semantic tokens
content = content.replace(/bg-white/g, 'bg-background');
content = content.replace(/text-gray-900/g, 'text-foreground');
content = content.replace(/text-gray-600/g, 'text-muted-foreground');
content = content.replace(/text-gray-500/g, 'text-muted-foreground');
content = content.replace(/text-gray-400/g, 'text-muted-foreground/80');
content = content.replace(/hover:text-gray-900/g, 'hover:text-foreground');
content = content.replace(/bg-gray-50/g, 'bg-surface');
content = content.replace(/border-gray-100/g, 'border-border');

fs.writeFileSync('src/components/layout/footer.tsx', content, 'utf8');
console.log('Updated Footer');
