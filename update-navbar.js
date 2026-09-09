const fs = require('fs');

let content = fs.readFileSync('src/components/layout/navbar.tsx', 'utf8');

// Replace standard colors with semantic tokens
content = content.replace(/bg-white/g, 'bg-background');
content = content.replace(/text-gray-900/g, 'text-foreground');
content = content.replace(/text-gray-700/g, 'text-foreground');
content = content.replace(/text-gray-600/g, 'text-muted-foreground');
content = content.replace(/text-gray-500/g, 'text-muted-foreground');
content = content.replace(/hover:bg-gray-50/g, 'hover:bg-muted');

fs.writeFileSync('src/components/layout/navbar.tsx', content, 'utf8');
console.log('Updated Navbar');
