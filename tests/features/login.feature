#language: pt

Funcionalidade: Login no Sistema

Contexto:
  Dado que o usuário está na página de login

@loginSucesso
  Cenário: Login com sucesso
    Quando o usuário insere um usuário e senha válidos
    E o usuário clica no botão de login
    Então o usuário deve ser redirecionado para a página inicial

@loginSenhaInvalida
  Cenário: Login sem sucesso com senha inválida
    Quando o usuário insere um usuário válido e senha inválida
    E o usuário clica no botão de login
    Então uma mensagem de erro referente ao login inválido deve ser exibida informando 'Epic sadface: Username and password do not match any user in this service'

@loginCampoUsuarioEmBranco
  Cenário: Login com campo de usuário em branco
    Quando o usuário deixa o campo de usuário em branco e insere uma senha válida
    E o usuário clica no botão de login
    Então uma mensagem de erro referente aos campos em branco deve ser exibida informando 'Epic sadface: Username is required'

@loginCampoSenhaEmBranco
  Cenário: Login com campo de senha em branco
    Quando o usuário insere um usuário válido e deixa o campo de senha em branco
    E o usuário clica no botão de login
    Então uma mensagem de erro referente ao campo de senha em branco deve ser exibida informando 'Epic sadface: Password is required'

