const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../../page-objects/loginPage');
const HomePage = require('../../page-objects/homePage');
const ComprasPage = require('../../page-objects/comprasPage');

let browser, context, page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    this.page = page;
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.comprasPage = new ComprasPage(page);
})

After(async function () {
    if (browser) {
        await browser.close();
    }
});
