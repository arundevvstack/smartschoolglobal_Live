const fs = require('fs');

const css = `
@layer utilities {
  .dark-product-theme {
    --surface: var(--product-surface);
    --surface-elevated: #1e293b;
    --background: var(--product-surface);
    --foreground: var(--product-foreground);
    --muted: rgba(255, 255, 255, 0.05);
    --muted-foreground: rgba(255, 255, 255, 0.6);
    --border: rgba(255, 255, 255, 0.1);
  }
}
`;

fs.appendFileSync('src/app/globals.css', css);
console.log('Appended dark-product-theme');
