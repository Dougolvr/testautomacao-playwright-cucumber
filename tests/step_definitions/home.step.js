const { Given, When, Then} = require('@cucumber/cucumber');
const Credentials = require('../support/credentials');

Given('que o usuário esta na página inicial', async function () {
    await this.loginPage.abrirPagina();
    await this.loginPage.realizarLogin(
        Credentials.usuarioValido.usuario,
        Credentials.usuarioValido.senha
    );
    await this.loginPage.clicarBotaoLogin();
});

When('o usuário clica no botão de menu', async function () {
    await this.homePage.acessarMenu();
});

// -------------- Cenário: Navegação no menu e clique no botão "Todos os Itens"
When('o usuário clica no botão Todos os Itens', async function () {
    await this.homePage.clicarEVerificaBotaoTodosItens();
});

Then('o usuário deve ser redirecionado para a página de itens', async function () {
    await this.homePage.verificaPaginaTodosOsItens();
});

// -------------- Cenário: Navegação no menu e clique no botão "Sobre"

// Quando o usuário clica no botão de menu
When('o usuário clica no botão Sobre', async function (){
    await this.homePage.clicaEVerificarBotaoSobre();
})

Then('o usuário deve ser redirecionado para a página da Sauce Labs', async function () {
    await this.homePage.verificaPaginaSobre();
});

// -------------- Cenário: Navegação no menu e clique no botão "Resetar produtos"

Given('que o usuário adicionou o produto {string} ao carrinho', async function (nomeProduto) {
    await this.homePage.adicionarProdutoAoCarrinho(nomeProduto);
});

// Quando o usuário clica no botão de menu

When('o usuário clica no botão Resetar produtos', async function () {
    await this.homePage.clicarEVerificarBotaoReset();
});

Then('os produtos do usuário devem ser resetados do carrinho', async function () {
    await this.homePage.verificaReset();
});

// -------------- Cenário: Navegação no menu e clique no botão "Logout"

//  Quando o usuário clica no botão de menu
When('o usuário clica no botão Logout', async function () {
    await this.homePage.clicarEVerificarBotaoLogout();
});

Then('o usuário deve ser redirecionado para a página de login', async function () {
    await this.homePage.verificaLogoutPagina();
});

// -------------- Cenário: adicionar um produto ao carrinho
When('o usuário clica no botão para adiconar o produto {string} ao carrinho', async function (nomeProduto) {
    await this.homePage.adicionarProdutoAoCarrinho(nomeProduto);
});

Then('o produto {string} deve ser adicionado ao carrinho', async function (nomeProduto) {
    await this.homePage.verificaProdutoAdicionadoAoCarrinho(nomeProduto);
});

// -------------- Cenário: remover um produto do carrinho
Given('que o usuário tem o produto {string} ao carrinho', async function(nomeProduto) {
    await this.homePage.adicionarProdutoAoCarrinho(nomeProduto);
});

When('o usuário clica no botão para remover o produto selecionado', async function () {
    await this.homePage.clicarBotaoRemover();
});

Then('o produto deve ser removido do carrinho', async function () {
    await this.homePage.verificaProdutoRemovido();
});

// -------------- Cenário: Ordenar produtos por nome crescente
When('o usuário seleciona a opção {string} no menu de ordenação', async function(opcaoOrdenacao) {
    await this.homePage.selecionarOpcaoOrdenacao(opcaoOrdenacao);
});

Then('os produtos devem ser exibidos em ordem alfabética crescente', async function () {
    await this.homePage.verificaOrdenacaoProdutosCrescente();
});

// -------------- Cenário: Ordenar produtos por nome decrescente
Then('os produtos devem ser exibidos em ordem alfabética decrescente', async function () {
    await this.homePage.verificaOrdenacaoProdutosDecrescente();
});

// -------------- Cenário: Ordenar produtos por preço crescente
Then('os produtos devem ser exibidos em ordem de preço crescente', async function () {
    await this.homePage.verificaOrdenacaoProdutosPreçoCrescente()
});

// -------------- Cenário: Ordenar produtos por preço decrescente
Then('os produtos devem ser exibidos em ordem de preço decrescente', async function () {
    await this.homePage.verificaOrdenacaoProdutosPrecoDecrescente();
});