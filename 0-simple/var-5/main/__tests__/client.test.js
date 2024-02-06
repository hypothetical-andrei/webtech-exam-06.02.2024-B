const puppeteer = require('puppeteer')

let browser
let page

process.on('uncaughtException', e => console.warn(e.stack))

describe('local', () => {

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
      ignoreDefaultArgs: ['--disable-extensions'],
    })
    page = await browser.newPage()
  })

  it('form exists in page, button is disabled by default', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('div#form #addBtn')
    const btn = await page.$eval('div#form #addBtn', el => el.disabled)
    expect(btn).toBe(true)
  })

  it('form remains disabled with valid name but invalid job', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('div#form #addBtn')
    await page.focus('#nameInput')
    await page.keyboard.type('john')
    await page.focus('#jobInput')
    await page.keyboard.type('cc')
    const btn = await page.$eval('div#form #addBtn', el => el.disabled)
    expect(btn).toBe(true)
  })


  it('form is enabled with valid name and job', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('div#form #addBtn')
    await page.focus('#nameInput')
    await page.keyboard.type('john')
    await page.focus('#jobInput')
    await page.keyboard.type('tester')
    const btn = await page.$eval('div#form #addBtn', el => el.disabled)
    expect(btn).toBe(false)
  })


  it('can click button to add record', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('div#form #addBtn')
    await page.focus('#nameInput')
    await page.keyboard.type('john')
    await page.focus('#jobInput')
    await page.keyboard.type('tester')
    await page.click('#addBtn')
    await page.waitForResponse(response => response.status() === 200 && response.request().method() === 'GET')
    const items = await page.$$eval("#main>div", e => e)
    let contentArray = Array.apply(null, items)
    expect(contentArray.length).toBe(4)
  })

  afterAll(async () => {
    await page.close()
    await browser.close()
  })
})