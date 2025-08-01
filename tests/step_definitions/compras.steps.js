const { Given, When, Then } = require('@cucumber/cucumber');
const Credentials = require('../support/credentials');

// -------------- Cenário: Realizar a compra de dois produtos com sucesso
Given('que o usuário está na página de produtos', async function () {
    await this.loginPage.abrirPagina();
    await this.loginPage.realizarLogin(
            Credentials.usuarioValido.usuario,
            Credentials.usuarioValido.senha
    );
    await this.loginPage.clicarBotaoLogin();
});

When('o usuário adiciona os produtos {string} e {string} ao carrinho', async function (produto1, produto2) {
    await this.comprasPage.adicionaProdutoAoCarrinho(produto1, produto2);
});

When('realiza o processo de checkout com os dados válidos', async function () {
    await this.comprasPage.realizarCheckout(
        Credentials.dadosCheckout.firstName,
        Credentials.dadosCheckout.lastName,
        Credentials.dadosCheckout.postalCode
    );
});

When('o usuário clica no botão para finalizar a compra', async function () {
    await this.comprasPage.clicarBotaoFinalizarCompra();
});

Then('o usuário deve ver a mensagem {string}', async function (mensagem) {
    await this.comprasPage.verificarMensagemCompraFinalizada(mensagem);
});

// -------------- Cenário: Cancelar a compra antes de finalizar
When('o usuário adiciona o produto {string} ao carrinho', async function (produto) {
    await this.comprasPage.adicionaProdutoAoCarrinho(produto);
});

When('cancela a compra antes de finalizar', async function () {
    await this.comprasPage.cancelarCompra();
});

Then('o usuário deve ser redirecionado para a página de produtos', async function () {
    await this.comprasPage.verificaCompraCancelada()
});

// -------------- Cenário: Tentar realizar a compra sem preencher os dados de checkout

When('realiza o processo de checkout sem preencher os campos obrigatórios', async function() {
    await this.comprasPage.realizarCheckout(
        Credentials.dadosCheckoutEmBranco.firstName,
        Credentials.dadosCheckoutEmBranco.lastName,
        Credentials.dadosCheckoutEmBranco.postalCode
    );
});

Then('o sistema deve exibir uma das mensagens de erro:', async function(mensagem) {
    await this.comprasPage.verificaMensagemChekoutEmBranco(mensagem);
});

// -------------- Cenário: Tentar realizar checkout sem preencher o primeiro nome
When('realiza o processo de checkout sem preencher o campo primeiro nome', async function () {
    await this.comprasPage.realizarCheckout(
        Credentials.dadosCheckoutEmBranco.firstName,
        Credentials.dadosCheckout.lastName,
        Credentials.dadosCheckout.postalCode
    );
});

Then('o sistema deve exibir a mensagem de erro de primeiro nome {string}', async function (mensagem) {
    await this.comprasPage.verificaMensagemChekout(mensagem)
});

// -------------- Cenário: Tentar realizar checkout sem preencher o sobrenome
When('realiza o processo de checkout sem preencher o campo sobrenome', async function () {
    await this.comprasPage.realizarCheckout(
        Credentials.dadosCheckout.firstName,
        Credentials.dadosCheckoutEmBranco.lastName,
        Credentials.dadosCheckout.postalCode
    );
});

Then('o sistema deve exibir a mensagem de erro de sobrenome {string}', async function (mensagem) {
    await this.comprasPage.verificaMensagemChekout(mensagem)
});

// -------------- Cenário: Tentar realizar checkout sem preencher o código postal
When('realiza o processo de checkout sem preencher o campo código postal', async function () {
    await this.comprasPage.realizarCheckout(
        Credentials.dadosCheckout.firstName,
        Credentials.dadosCheckout.lastName,
        Credentials.dadosCheckoutEmBranco.postalCode
    );
});

Then('o sistema deve exibir a mensagem de erro de codigo postal {string}', async function (mensagem) {
    await this.comprasPage.verificaMensagemChekout(mensagem)
});
