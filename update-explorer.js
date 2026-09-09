const fs = require('fs');

let content = fs.readFileSync('src/components/sections/feature-explorer.tsx', 'utf8');

// Colors
content = content.replace(/bg-gray-50/g, 'bg-surface');
content = content.replace(/bg-white/g, 'bg-background');
content = content.replace(/text-gray-900/g, 'text-foreground');
content = content.replace(/text-gray-600/g, 'text-muted-foreground');
content = content.replace(/text-gray-500/g, 'text-muted-foreground');
content = content.replace(/text-gray-400/g, 'text-muted-foreground');
content = content.replace(/bg-gray-100/g, 'bg-muted');
content = content.replace(/hover:bg-gray-200/g, 'hover:bg-muted/80');
content = content.replace(/hover:bg-gray-50/g, 'hover:bg-muted/50');
content = content.replace(/text-gray-700/g, 'text-foreground');

// Make it look more premium
content = content.replace(/border-r/g, 'border-e border-border');
content = content.replace(/border-b/g, 'border-b border-border');
content = content.replace(/border-t/g, 'border-t border-border');

fs.writeFileSync('src/components/sections/feature-explorer.tsx', content, 'utf8');
console.log('Updated FeatureExplorer');
