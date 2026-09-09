const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Insert new @theme properties
const themeInsertion = `
  --color-navy: var(--navy);
  --color-navy-light: var(--navy-light);
  --color-surface-white: var(--surface-white);
  --color-surface-blue: var(--surface-blue);
  --color-surface-blue-soft: var(--surface-blue-soft);
  --color-product-surface: var(--product-surface);
  --color-product-foreground: var(--product-foreground);
`;

css = css.replace('--color-brand-950: #1e1b4b;', '--color-brand-950: #1e1b4b;' + themeInsertion);

// Insert into :root (Light mode)
const rootInsertion = `
  --navy: #0f172a;
  --navy-light: #1e293b;
  --surface-white: #ffffff;
  --surface-blue: #eef2ff;
  --surface-blue-soft: #f8fafc;
  --product-surface: #0f172a;
  --product-foreground: #f8fafc;
`;

css = css.replace('--radius: 0.75rem;', '--radius: 0.75rem;' + rootInsertion);

// Insert into dark mode
const darkInsertion = `
  --navy: #f8fafc;
  --navy-light: #e2e8f0;
  --surface-white: #020617;
  --surface-blue: #0f172a;
  --surface-blue-soft: #020617;
  --product-surface: #0f172a;
  --product-foreground: #f8fafc;
`;

css = css.replace('--ring: #a5b4fc;', '--ring: #a5b4fc;' + darkInsertion);

fs.writeFileSync('src/app/globals.css', css);
console.log('Updated globals.css');
