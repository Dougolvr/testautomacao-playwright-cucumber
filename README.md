# 🧪 Projeto de Testes Automatizados com Playwright + Cucumber

Este projeto tem como objetivo automatizar cenários de testes **end-to-end (E2E)** utilizando o framework **Playwright** aliado ao **Cucumber**, com foco na aplicação no site [Swag Labs](https://www.saucedemo.com/).

## 🧩 Tecnologias Utilizadas

- ![Playwright Logo](https://img.shields.io/badge/-Playwright-2c2c2c?style=flat&logo=playwright&logoColor=green) – Framework para automação de browsers

- ![JavaScript Logo](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) – Linguagem utilizada no projeto

- ![Cucumber Logo](https://img.shields.io/badge/-Cucumber-23D96C?style=flat&logo=cucumber&logoColor=white) – Para escrita de testes em formato BDD

- ![Gherkin Logo](https://img.shields.io/badge/-Gherkin%20(.feature)-5cb85c?style=flat&logo=gnu-bash&logoColor=white) – Escrita de cenários em linguagem natural para BDD

- ![POM Icon](https://img.shields.io/badge/-Page%20Object%20Model-5c5c5c?style=flat&logo=codeforces&logoColor=white) – Padrão de projeto para reutilização e organização do código

## ⚙️ Configuração

* Instale o Playwright

```bash
npm init playwright@latest
```

* Instale o Cucumber

```bash
npm install @cucumber/cucumber
```
* Após as instalações, adicione as pastas e arquivos faltantes de acordo com a estrutura do projeto.

* Crie o arquivo cucumber.js e insira nele:

```js
  module.exports = {
    default: [
      'tests/features',
      '--require', 'tests/step_definitions/*.js',
      '--require', 'tests/support/**/*.js'
    ].join(' ')
  };
```


## 📁 Estrutura do Projeto

```bash
projeto-bdd-playwright/
├── page-objects/                 # Page Objects com métodos de interação com a UI
│   ├── homePage.js
│   └── loginPage.js
│
├── tests/
│   ├── features/                 # Arquivos .feature com cenários escritos em Gherkin
│   │   ├── home.feature
│   │   └── login.feature
│   │
│   ├── step_definitions/        # Implementação dos steps usados nos cenários
│   │   ├── home.step.js
│   │   └── login.steps.js
│   │
│   └── support/                 # Arquivos de suporte e configuração
│       ├── credentials.js       # Dados simulados para login
│       └── hooks.js             # Hooks (Before, After) e inicialização do navegador
│
├── cucumber.js                  # Configuração padrão do Cucumber
├── playwright.config.js         # Configurações do Playwright
├── package.json
└── README.md
```


## 📌 Funcionalidades e Cenários Implementados

### 🔐 Funcionalidade: Login no Sistema
- ✅ Cenário: Login com sucesso
- ✅ Cenário: Login sem sucesso com senha inválida
- ✅ Cenário: Login com campo de usuário em branco
- ✅ Cenário: Login com campo de senha em branco

### 🧭 Funcionalidade: Navegação na página de inicial
- ✅ Cenário: Navegação no menu e clique no botão **"Todos os Itens"**
- ✅ Cenário: Navegação no menu e clique no botão **"Sobre"**
- ✅ Cenário: Navegação no menu e clique no botão **"Logout"**
- ✅ Cenário: Navegação no menu e clique no botão **"Resetar produtos"**

## 📋 Funcionalidades Planejadas

### 🛒 Funcionalidade: Carrinho de Compras
- 🔜 Cenário: Adicionar produto ao carrinho  
- 🔜 Cenário: Remover um produto adicionado ao carrinho  

### 📊 Funcionalidade: Ordenação de Produtos
- 🔜 Cenário: Ordenar produtos por nome crescente  
- 🔜 Cenário: Ordenar produtos por nome decrescente  
- 🔜 Cenário: Ordenar produtos por preço crescente  
- 🔜 Cenário: Ordenar produtos por preço decrescente  

## ▶️ Como Executar os Testes
- Todos os testes: `npx cucumber-js`

- Um cenário específico (por tag): `npx cucumber-js --tags @nomeDaTag` 

  - *Exemplo* - `npx cucumber-js --tags @navegaNoMenuBotaoLogout`

## ⚠️ Observações
-  O Cucumber acusa erro de ambiguidade caso existam múltiplos steps com frases idênticas, como por exemplo:
``` Given('que o usuário está na página de login') ``` e ``` When('o usuário clica no botão de login') ```. Então, nesses casos faz a inserção apenas uma vez desses steps para não gerar erro de ambiguidade.
