#language: pt

Funcionalidade: Navegação na página de login

Contexto:
    Dado que o usuário esta na página inicial

@navegaNoMenuBotaoTodosOsItens
    Cenário: Navegação no menu e clique no botão "Todos os Itens"
        Quando o usuário clica no botão de menu
        E o usuário clica no botão Todos os Itens
        Então o usuário deve ser redirecionado para a página de produtos

@navegaNoMenuBotaoSobre
    Cenário: Navegação no menu e clique no botão "Sobre"
        Quando o usuário clica no botão de menu
        E o usuário clica no botão Sobre
        Então o usuário deve ser redirecionado para a página da Sauce Labs

@navegaNoMenuBotaoLogout
    Cenário: Navegação no menu e clique no botão "Logout"
        Quando o usuário clica no botão de menu
        E o usuário clica no botão Logout
        Então o usuário deve ser redirecionado para a página de login

@navegaNoMenuBotaoResetarProdutos
    Cenário: Navegação no menu e clique no botão "Resetar produtos"
        Dado que o usuário adicionou o produto "Sauce Labs Backpack" ao carrinho
        Quando o usuário clica no botão de menu
        E o usuário clica no botão Resetar produtos
        Então os produtos do usuário devem ser resetados do carrinho

@adicionarProdutoAoCarrinho
    Cenário: Adicionar produto ao carrinho
        Quando o usuário clica no botão para adiconar o produto "Sauce Labs Backpack" ao carrinho
        Então o produto "Sauce Labs Backpack" deve ser adicionado ao carrinho

# @removerProdutoDoCarrinho
#     Cenário: Remover um produto adicionado ao carrinho
#         Dado que o usuário adicionou o produto "Sauce Labs Backpack" ao carrinho
#         Quando o usuário clica no botão "Remove" do produto "Sauce Labs Backpack"
#         Então o produto deve ser removido do carrinho

# @ordenarProdutosPorNomeCrescente
#     Cenário: Ordenar produtos por nome crescente
#         Quando o usuário seleciona a opção "Name (A to Z)" no menu de ordenação
#         Então os produtos devem ser exibidos em ordem alfabética crescente

# @ordenarProdutosPorNomeDecrescente
#     Cenário: Ordenar produtos por nome decrescente
#         Quando o usuário seleciona a opção "Name (Z to A)" no menu de ordenação
#         Então os produtos devem ser exibidos em ordem alfabética decrescente

# @ordenarProdutosPorPreçoCrescente
#     Cenário: Ordenar produtos por preço crescente
#         Quando o usuário seleciona a opção "Price (low to high)" no menu de ordenação
#         Então os produtos devem ser exibidos em ordem de preço crescente

# @ordenarProdutosPorPreçoDecrescente
#     Cenário: Ordenar produtos por preço decrescente
#         Quando o usuário seleciona a opção "Price (high to low)" no menu de ordenação
#         Então os produtos devem ser exibidos em ordem de preço decrescente