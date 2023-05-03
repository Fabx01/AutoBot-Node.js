# AutoBot-Node.js
automação de cliques e ecesso de paginas web usando node.js e a biblioteca Puppeteer


**Passo 1 - Instalação do Node.js**

Antes de começar, você precisará instalar o Node.js em sua máquina. Para fazer isso, acesse o site oficial do Node.js (https://nodejs.org) e baixe a versão apropriada para o seu sistema operacional. Siga as instruções de instalação e verifique se o Node.js foi instalado corretamente executando o seguinte comando no terminal:

```
node -v
```

Se você vir a versão do Node.js instalada, está tudo certo!

**Passo 2 - Inicialização do projeto**

Para criar um novo projeto Node.js, você precisa criar um novo diretório para o seu projeto e navegar até ele no terminal. Você pode fazer isso com os seguintes comandos:

```
mkdir meu-projeto
cd meu-projeto
```

Agora que você está no diretório do seu projeto, pode inicializar um novo projeto Node.js executando o seguinte comando:

```
npm init
```

Este comando irá iniciar um assistente de criação de pacote Node.js e solicitará que você responda algumas perguntas sobre o seu projeto, como o nome, versão, descrição, autor, dependências etc. Você pode aceitar as configurações padrão ou fornecer suas próprias.

**Passo 3 - Adição de dependências**

Dependendo das necessidades do seu projeto, você pode precisar adicionar algumas dependências. Para fazer isso, você pode usar o comando `npm install` seguido do nome da dependência. Por exemplo, se você quiser adicionar a dependência Puppeteer, execute o seguinte comando:

```
npm install puppeteer
```

Isso instalará a última versão do Puppeteer em seu projeto e adicionará uma entrada em seu arquivo `package.json`.

**Passo 4 - Criação do arquivo principal do aplicativo**

O próximo passo é criar o arquivo principal do seu aplicativo Node.js. Tradicionalmente, esse arquivo é chamado de `index.js`, mas você pode escolher qualquer nome que desejar. Crie um novo arquivo com o nome que desejar e adicione o seguinte código:

```javascript
const puppeteer = require("puppeteer");

async function run() {
  
  const browser = await puppeteer.launch({
    headless: false, 
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-notifications", 
    ],
  });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(60000); 
  await page.goto("https://www.google.com");
  
  }
  run();
```

Este código Iniciando o navegador Chrome e abre a pagina do google

**Passo 5 - Execução do aplicativo**

Agora que o arquivo principal do seu aplicativo está pronto, você pode executá-lo com o seguinte comando:

```
node index.js
```

Se tudo estiver funcionando corretamente, você poderá ver o log no terminal e a execução do chomium com a url go google

**Conclusão**

Isso é tudo que é necessário para criar um projeto Node.js básico. Obviamente, dependendo das necessidades do seu projeto, você precisará adicionar mais código e bibliotecas para torná-lo funcional. Mas com esses passos básicos, você tem uma estrutura
