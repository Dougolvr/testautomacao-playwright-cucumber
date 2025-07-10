# 🧪 Projeto de Testes Automatizados com Playwright + Cucumber
- Este projeto tem como objetivo automatizar cenários de testes end-to-end (E2E) utilizando Cucumber e Playwright, com foco em testes no site Swag Labs.

#### Adicionado o seguinte scritp para rodar os tests (opcional)
"scripts": {
  "test": "cucumber-js"
}

#### Adicionado o arquivo
    - cucumber.json

## 📍 Observações
-  O Cucumber identifica ambiguidades causadas por steps idênticos, como acontece nesse projeto ao usar o:
``` Given('que o usuário está na página de login') ``` e ``` When('o usuário clica no botão de login') ```. Então, nesses casos faz a inserção apenas uma vez desses steps para não gerar erro de ambiguidade.

