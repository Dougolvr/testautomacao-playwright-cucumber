const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.campoEmail = page.locator('#user-name');
        this.campoSenha = page.locator('#password');
        this.botaoLogin = page.locator('#login-button');
        this.mensagemErroLogin = page.locator('[data-test="error"]');

    }

    async abrirPagina() {
        await this.page.goto('https://www.saucedemo.com/v1/index.html');
    }

    async realizarLogin(usuario, senha) {
        await this.campoEmail.fill(usuario);
        await this.campoSenha.fill(senha);
    }

    async clicarBotaoLogin() {
        await this.botaoLogin.click();
    }

    async verificacaoLoginSucesso() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
        await expect(this.page.getByText('Products')).toBeVisible();
    }

    async verificacaoLoginInvalido(menssagemErro) {
        await expect(this.mensagemErroLogin).toBeVisible();
        await expect(this.mensagemErroLogin).toContainText(menssagemErro);
    }

    async verificacaoLoginEmBranco(menssagemErro){
        await expect(this.mensagemErroLogin).toBeVisible();
        await expect(this.mensagemErroLogin).toContainText(menssagemErro);
    }
}

module.exports = LoginPage;
