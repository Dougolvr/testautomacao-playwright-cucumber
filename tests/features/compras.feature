#language: pt

Funcionalidade: Realizar Compras

Contexto:
    Dado que o usuário está na página de produtos
    
@realizaCompraDeDoisProdutos
    Cenário: Realizar a compra de dois produtos com sucesso
        Quando o usuário adiciona os produtos "Sauce Labs Fleece Jacket" e "Sauce Labs Backpack" ao carrinho
        E realiza o processo de checkout com os dados válidos
        E o usuário clica no botão para finalizar a compra
        Então o usuário deve ver a mensagem "THANK YOU FOR YOUR ORDER"

@cancelaCompra
Cenário: Cancelar a compra antes de finalizar
    Quando o usuário adiciona o produto "Sauce Labs Bike Light" ao carrinho
    E realiza o processo de checkout com os dados válidos
    E cancela a compra antes de finalizar
    Então o usuário deve ser redirecionado para a página de produtos

@checkoutSemPreencherDados
Cenário: Tentar realizar a compra sem preencher os dados de checkout
    Quando o usuário adiciona o produto "Sauce Labs Bolt T-Shirt" ao carrinho
    E realiza o processo de checkout sem preencher os campos obrigatórios
    Então o sistema deve exibir uma das mensagens de erro:
        | mensagem                              |
        | Error: First Name is required         |
        | Error: Last Name is required          |
        | Error: Postal Code is required        |

@checkoutSemPrimeiroNome
Cenário: Tentar realizar checkout sem preencher o primeiro nome
  Quando o usuário adiciona o produto "Sauce Labs Bolt T-Shirt" ao carrinho
  E realiza o processo de checkout sem preencher o campo primeiro nome
  Então o sistema deve exibir a mensagem de erro de primeiro nome "Error: First Name is required"

@checkoutSemUltimoNome
Cenário: Tentar realizar checkout sem preencher o sobrenome
  Quando o usuário adiciona o produto "Sauce Labs Bolt T-Shirt" ao carrinho
  E realiza o processo de checkout sem preencher o campo sobrenome
  Então o sistema deve exibir a mensagem de erro de sobrenome "Error: Last Name is required"

@checkoutSemCodigoPostal
Cenário: Tentar realizar checkout sem preencher o código postal
  Quando o usuário adiciona o produto "Sauce Labs Bolt T-Shirt" ao carrinho
  E realiza o processo de checkout sem preencher o campo código postal
  Então o sistema deve exibir a mensagem de erro de codigo postal "Error: Postal Code is required"

