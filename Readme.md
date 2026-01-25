# projecto Extjs framework


## 📖 Sobre o Projeto

Este projeto é uma aplicação web corporativa desenvolvida com **Ext JS**, seguindo as melhores práticas para construção de sistemas robustos, escaláveis e de fácil manutenção.

O projeto já vem configurado com:

- ✅ Ext JS (arquitetura MVC/MVVM)
- ✅ Sencha Cmd para gerenciamento, build e execução da aplicação
- ✅ Estrutura modular com Views, Controllers, Models e Stores
- ✅ Suporte a temas e customização visual
- ✅ Organização padrão recomendada pela Sencha
- ✅ Ambiente de desenvolvimento com live reload (`sencha app watch ou npm start`)
- ✅ Build otimizado para produção


## 🚀 Tecnologias

- **Ext JS** – Framework JavaScript para desenvolvimento de aplicações web corporativas (SPA)
- **Sencha Cmd** – Ferramenta oficial para build, execução e gerenciamento do projeto
- **JavaScript (ES6)** – Linguagem principal da aplicação
- **HTML5** – Estruturação das páginas
- **CSS / Theming Ext JS** – Estilização e customização visual
- **Arquitetura MVC / MVVM** – Organização do código em Views, Controllers, Models e Stores
- **Node.js** – Dependência utilizada pelo Sencha Cmd
- **Java (JDK)** – Necessário para execução do Sencha Cmd

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Java JDK** 8 ou superior
- **Node.js** (versão LTS recomendada)  
- **Sencha Cmd** (ferramenta oficial do Ext JS)  
- **Ext JS SDK** compatível com a versão do projeto  
- **Git** (para controle de versão)
- **LINKS de instalação e configuração** https://blog.bsource.com.br/extjs/2020/01/02/ext-js-community-edition/


## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd AssetSyncBuildModule.git
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

4. Acesse [http://localhost:PORTA](http://localhost:PORTA) no navegador

## 📁 Estrutura de Pastas

A estrutura do projeto está organizada de acordo com as boas práticas do **Ext JS**, separando responsabilidades e facilitando a manutenção e evolução da aplicação.

```
project-root/
│
├── app/                          # Código principal da aplicação
│   ├── desktop/                  # Implementação específica para desktop
│   │   ├── overrides/            # Overrides do Ext JS
│   │   ├── Readme.md             # Documentação específica do desktop
│   │   ├── sass/                 # Estilos (Sass/CSS)
│   │   │   ├── src.scss
│   │   │   └── var.scss
│   │   └── src/                  # Código-fonte da aplicação
│   │       ├── model/            # Models (estrutura de dados)
│   │       ├── store/            # Stores (gerenciamento de dados)
│   │       ├── util/             # Funções utilitárias
│   │       ├── view/             # Views (telas e componentes)
│   │       ├── Application.js    # Classe principal da aplicação
│   │       └── Application.css   # Estilos globais da aplicação
│
├── shared/                       # Código compartilhado entre toolkits
├── build/                        # Arquivos gerados após o build
├── generatedFiles/               # Arquivos gerados automaticamente
├── node_modules/                 # Dependências Node.js
├── packages/                     # Pacotes adicionais do Sencha
├── resources/                    # Recursos estáticos (imagens, fontes, etc.)
│
├── .gitignore                    # Arquivos ignorados pelo Git
├── app.js                        # Bootstrap da aplicação
├── app.json                      # Configurações do projeto Ext JS
├── build.xml                     # Configuração de build (Ant)
├── favicon.ico                   # Ícone da aplicação
├── index.html                    # Ponto de entrada da aplicação
├── index.js                      # Arquivo de inicialização
├── package.json                  # Dependências e scripts Node.js
├── package-lock.json             # Lock de dependências
├── Readme.md                     # Documentação principal do projeto
├── webpack.config.js             # Configuração do Webpack (se aplicável)
└── workspace.json                # Configurações do workspace Sencha

```

## 📚 Recursos Adicionais

- [Documentação EXTJS](https://docs.sencha.com/extjs/7.9.0/)