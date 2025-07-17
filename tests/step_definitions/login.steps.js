const { Given, When, Then, After } = require('@cucumber/cucumber');
const LoginPage = require('../../page-objects/loginPage');
const Credentials = require('../support/credentials');
const { chromium } = require('playwright');

let browser, context, page;

// ---------------- CENÁRIO 1 ----------------
Given('que o usuário está na página de login', async function () {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();

        this.loginPage = new LoginPage(page);
        await this.loginPage.abrirPagina();
});

When('o usuário insere um usuário e senha válidos', async function () {
    const {usuario, senha} = Credentials.usuarioValido;
    await this.loginPage.realizarLogin(usuario, senha);
});

When('o usuário clica no botão de login', async function () {
    await this.loginPage.clicarBotaoLogin();
});

Then('o usuário deve ser redirecionado para a página inicial', async function () {
    await this.loginPage.verificacaoLoginSucesso();
});

// ---------------- CENÁRIO 2 ----------------
When('o usuário insere um usuário válido e senha inválida', async function () {
    const {usuario, senha} = Credentials.usuarioSenhaInvalido;
    await this.loginPage.realizarLogin(usuario, senha);
});

// E Clica no botao de login

Then('uma mensagem de erro referente ao login inválido deve ser exibida informando {string}', async function (menssagemErro) {
    await this.loginPage.verificacaoLoginInvalido(menssagemErro);
});

// ---------------- CENÁRIO 3 ----------------
When('o usuário deixa o campo de usuário em branco e insere uma senha válida', async function () {
    const {senha} = Credentials.usuarioValido;
    await this.loginPage.realizarLogin('', senha);
});
// E Clica no botao de login

Then('uma mensagem de erro referente aos campos em branco deve ser exibida informando {string}', async function (menssagemErro) {
    await this.loginPage.verificacaoLoginEmBranco(menssagemErro);
});

// ---------------- CENÁRIO 4 ----------------
When('o usuário insere um usuário válido e deixa o campo de senha em branco', async function () {
    const {usuario} = Credentials.usuarioValido;
    await this.loginPage.realizarLogin(usuario, '');
});
// E Clica no botao de login

Then('uma mensagem de erro referente ao campo de senha em branco deve ser exibida informando {string}', async function (menssagemErro) {
    await this.loginPage.verificacaoLoginEmBranco(menssagemErro);
});



After(async function () {
    if (browser) await browser.close();
});