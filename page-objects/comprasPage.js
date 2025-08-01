const { DataTable } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

class ComprasPage {
    constructor(page) {
        this.page = page;
        this.botaoAdicionarProduto = page.locator('.inventory_item');
        this.botaoCarrinho = page.locator('.shopping_cart_link');
        this.botaoFinalizarCompra = page.locator('.btn_action');
        this.botaoCheckout = page.locator('.btn_action.checkout_button');
        this.campoNome = page.locator('#first-name');
        this.campoSobrenome = page.locator('#last-name');
        this.campoCep = page.locator('#postal-code');
        this.botaoContinuarCheckout = page.locator('.btn_primary.cart_button');
        this.mensagemCompraFinalizada = page.locator('.complete-header');
        this.botaoCancelarCompra = page.locator('.cart_cancel_link.btn_secondary');
        this.mensagemErroCheckout = page.locator('[data-test="error"]');
    }

    async adicionaProdutoAoCarrinho(...nomesProdutos) {
        for (const nome of nomesProdutos) {
            const produto = await this.botaoAdicionarProduto.filter({ has: this.page.getByText(nome) });
            await produto.getByRole('button', { name: 'Add to cart' }).click();
        }
        await this.botaoCarrinho.click();
    };

    async realizarCheckout(nome, sobrenome, cep) {
        await expect(this.botaoCheckout).toBeVisible();
        await this.botaoCheckout.click();
        
        await this.campoNome.fill(nome);
        await this.campoSobrenome.fill(sobrenome);
        await this.campoCep.fill(cep);

        await this.botaoContinuarCheckout.click();
    };

    async clicarBotaoFinalizarCompra() {
        await expect(this.botaoFinalizarCompra).toBeVisible();
        await this.botaoFinalizarCompra.click();
    }

    async verificarMensagemCompraFinalizada(mensagem) {
        await expect(this.mensagemCompraFinalizada).toBeVisible();
        await expect(this.mensagemCompraFinalizada).toContainText(mensagem);

        await this.page.screenshot({ path: 'tests/evidencias/compra-finalizada.png' });
    };

    async cancelarCompra() {
        await expect(this.botaoCancelarCompra).toBeVisible();
        await this.botaoCancelarCompra.click();
    };
    
    async verificaCompraCancelada() {
        await expect(this.page.getByText('Products')).toBeVisible();

        await this.page.screenshot({ path: 'tests/evidencias/compra-cancelada.png' });
    }

    async verificaMensagemChekoutEmBranco(mensagem){
        const mensagemErro = mensagem.rows().flat();
        const textoReal = (await this.mensagemErroCheckout.textContent()).trim();

        await expect(mensagemErro).toContain(textoReal)
        console.log("Mensagem exibida", textoReal)
    }

    async verificaMensagemChekout(mensagem){
        await expect(this.mensagemErroCheckout).toBeVisible();
        await expect(this.mensagemErroCheckout).toContainText(mensagem)

        await this.page.screenshot({ path: `tests/evidencias/compra-cancelada-${mensagem}.png` })
    };
};

module.exports = ComprasPage;