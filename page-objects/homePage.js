const { expect } = require("@playwright/test");
const { error } = require("console");

class HomePage {
    constructor(page) {
    this.page = page;
    this.botaoMenu = page.getByRole('button', { name: 'Open Menu' });
    this.botaoTodosOsItens = page.locator('#inventory_sidebar_link');
    this.botaoSobre = page.locator('#about_sidebar_link');
    this.botaoLogout = page.locator('#logout_sidebar_link');
    this.botaoReset = page.locator('#reset_sidebar_link');
    this.visibilidadeValorCarrinho = page.locator('.shopping_cart_badge');
    
    };

    async acessarMenu(){
        await this.botaoMenu.click();
    };

    async clicarEVerificaBotaoTodosItens() {
        if (await this.botaoTodosOsItens.isVisible()) {
            await this.botaoTodosOsItens.click();
        }
    };

    async verificaPaginaTodosOsItens() {
        await expect(this.page.getByText('Products')).toBeVisible();
    };

    async clicaEVerificarBotaoSobre() {
        if (await this.botaoSobre.isVisible()) {
            await this.botaoSobre.click();
        }
    };

    async verificaPaginaSobre() {
        await expect(this.page).toHaveURL('https://saucelabs.com/');
    };

    async clicarEVerificarBotaoReset() {
        if (await this.botaoReset.isVisible()) {
            await this.botaoReset.click();
        }
    };

    async verificaReset() {
        const visibilidadeCarrinho = await this.visibilidadeValorCarrinho.isVisible();

        if(visibilidadeCarrinho) {
            const valorCarrinho = await this.visibilidadeValorCarrinho.textContent();
            throw new error(`O carrinho não foi resetado. Valor atual: ${valorCarrinho}`);
        }
    };

    async clicarEVerificarBotaoLogout() {
        if (await this.botaoLogout.isVisible()) {
            await this.botaoLogout.click();
        }
    };

    async verificaLogoutPagina() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/v1/index.html');
    };

    async adicionarProdutoAoCarrinho(nomeProduto) {
        const produto = this.page.locator('.inventory_item').filter({ has: this.page.getByText(nomeProduto)});
        await produto.getByRole('button', { name: 'Add to cart' }).click();
    };



}

module.exports = HomePage;
