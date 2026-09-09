const puppeteer = require('puppeteer-core');
const fs = require('fs');

const urls = [
  'https://dodgerblue-rail-616565.hostingersite.com/',
  'https://dodgerblue-rail-616565.hostingersite.com/book-demo',
  'https://dodgerblue-rail-616565.hostingersite.com/solutions/k-12',
  'https://dodgerblue-rail-616565.hostingersite.com/solutions/higher-ed',
  'https://dodgerblue-rail-616565.hostingersite.com/solutions/multi-campus',
  'https://dodgerblue-rail-616565.hostingersite.com/solutions/international',
  'https://dodgerblue-rail-616565.hostingersite.com/features/student-management',
  'https://dodgerblue-rail-616565.hostingersite.com/features/fees',
  'https://dodgerblue-rail-616565.hostingersite.com/features/parent-portal',
  'https://dodgerblue-rail-616565.hostingersite.com/features/mobile-app',
  'https://dodgerblue-rail-616565.hostingersite.com/features/attendance',
  'https://dodgerblue-rail-616565.hostingersite.com/features/exams',
  'https://dodgerblue-rail-616565.hostingersite.com/features/timetable',
  'https://dodgerblue-rail-616565.hostingersite.com/features/analytics',
  'https://dodgerblue-rail-616565.hostingersite.com/features',
  'https://dodgerblue-rail-616565.hostingersite.com/features/library',
  'https://dodgerblue-rail-616565.hostingersite.com/pricing',
  'https://dodgerblue-rail-616565.hostingersite.com/resources/buyers-guide',
  'https://dodgerblue-rail-616565.hostingersite.com/resources/product-tour',
  'https://dodgerblue-rail-616565.hostingersite.com/blog',
  'https://dodgerblue-rail-616565.hostingersite.com/case-studies',
  'https://dodgerblue-rail-616565.hostingersite.com/resources/webinars',
  'https://dodgerblue-rail-616565.hostingersite.com/about'
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: "new"
  });
  const page = await browser.newPage();
  
  const contentMap = {};

  for (const url of urls) {
    console.log(`Scraping ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
      const text = await page.evaluate(() => {
        // give it a tiny bit more time to render if needed
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(document.body.innerText);
          }, 500);
        });
      });
      contentMap[url] = text;
    } catch (e) {
      console.error(`Error scraping ${url}:`, e);
      contentMap[url] = "ERROR: " + e.message;
    }
  }

  fs.writeFileSync('scraped_content.json', JSON.stringify(contentMap, null, 2));
  await browser.close();
  console.log("Scraping complete.");
})();
