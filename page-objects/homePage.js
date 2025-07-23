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
    this.botaoCarrinho = page.locator('.shopping_cart_link');
    this.botaoRemoverProduto = page.locator('.btn_secondary');
    this.botaoOrdenar = page.locator('.product_sort_container');

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
        await expect(this.visibilidadeValorCarrinho).not.toBeVisible();
    };

    async clicarEVerificarBotaoLogout() {
        if (await this.botaoLogout.isVisible()) {
            await this.botaoLogout.click();
        }
    };

    async verificaLogoutPagina() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/v1/index.html');
        await this.page.screenshot({ path: 'tests/evidencias/pagina-login.png' });
    };

    async adicionarProdutoAoCarrinho(nomeProduto) {
        const produto = this.page.locator('.inventory_item').filter({ has: this.page.getByText(nomeProduto)});
        await produto.getByRole('button', { name: 'Add to cart' }).click();
    };

    async verificaProdutoAdicionadoAoCarrinho(nomeProduto) {
        await this.botaoCarrinho.click();
        await expect(this.page.getByText(nomeProduto)).toBeVisible();

        await this.page.screenshot({ path: `tests/evidencias/produto-adicionado-no-carrinho.png`});
    };

    async clicarBotaoRemover(){
        await this.botaoRemoverProduto.isVisible();
        await this.botaoRemoverProduto.click();
    };
    
    async verificaProdutoRemovido() {
        await expect(this.visibilidadeValorCarrinho).not.toBeVisible();

        await this.page.screenshot({ path: `tests/evidencias/produto-removido.png`});
    };

    async selecionarOpcaoOrdenacao(opcao) {
        await this.botaoOrdenar.click();
        await this.botaoOrdenar.selectOption(opcao);
    };

    async verificaOrdenacaoProdutosCrescente() {
        const produtos = await this.page.locator('.inventory_item_name').allTextContents();
        const produtosOrdenados = [...produtos].sort((a, b) => a.localeCompare(b));

        expect(produtos).toEqual(produtosOrdenados);
        await this.page.screenshot({ path: `tests/evidencias/produtos-ordenados-crescentes.png`});
    };

    async verificaOrdenacaoProdutosDecrescente() {
        const produtos = await this.page.locator('.inventory_item_name').allTextContents();
        const produtosOrdenados = [...produtos].sort((a, b) => b.localeCompare(a));
        
        expect(produtos).toEqual(produtosOrdenados);
        await this.page.screenshot({ path: `tests/evidencias/produtos-ordenados-decrescentes.png`});
    };

    async verificaOrdenacaoProdutosPreçoCrescente() {
        const produtos = await this.page.locator('.inventory_item_price').allTextContents();
        const preco = produtos.map(p => parseFloat(p.replace('$', '')));
        const produtosOrdenados = [...preco].sort((a, b) => a - b);

        expect(preco).toEqual(produtosOrdenados);
        await this.page.screenshot({ path: `tests/evidencias/produtos-ordenados-preco-crescente.png`});
    };

    async verificaOrdenacaoProdutosPrecoDecrescente() {
        const produtos = await this.page.locator('.inventory_item_price').allTextContents();
        const preco = produtos.map(p => parseFloat(p.replace('$', '')));
        const produtosOdenados = [...preco].sort((a, b) => b - a);

        expect(preco).toEqual(produtosOdenados);
        await this.page.screenshot({ path: `tests/evidencias/produtos-ordenados-preco-decrescente.png`});
    };
}

module.exports = HomePage;
