const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3010';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headlesss: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('Page Rendering Tests', () => {

  //tells the test to wait until the network requests are idle before running test.
  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'})
  })

  test('Why we made this renders to the page', async () => {
    //selects div using css styling
    var div = '#whyMade-header'
    const title = await page.$eval(div, e => e.textContent);
    expect(title).toEqual('Why wemade this')
  })

  test('Materials and Care renders to the page', async () => {
    //selects div using css styling
    var div = '#materials-care'
    const title = await page.$eval(div, e => e.textContent);
    expect(title).toEqual('Materials and care')
  })

  test('Hero Product Feature Accordion has three sub-features', async () => {
    //selects div using css styling
    const subFeatureCount = await page.$$eval('#feature', features => features.length);
    expect(subFeatureCount).toEqual(3)
  })

});

// describe('AJAX Tests', () => {

//   test('Get Product will pull product', async () => {
//     //selects div using css styling
//     const product = await getProduct();
//     expect(product).toEqual(3)
//   })

// });