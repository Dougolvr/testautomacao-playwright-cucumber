const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../page-objects/loginPage');
const HomePage = require('../../page-objects/homePage');

let browser, context, page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    this.page = page;
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
})

After(async function () {
    if (browser) {
        await browser.close();
    }
});
