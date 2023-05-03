// Require Puppeteer
const puppeteer = require("puppeteer");

async function run() {
// Iniciando o navegador Chrome
const browser = await puppeteer.launch({
headless: false, // mude para true se você não quiser ver o navegador
args: [
"--no-sandbox",
"--disable-setuid-sandbox",
"--disable-dev-shm-usage",
"--disable-notifications", //usado para desativar as notificações

],
});

// Criando uma nova página e navegando para o Youtube
//const page = await browser.newPage();

// Define um atraso de 250ms entre as ações do Puppeteer
const page = await browser.newPage({ slowMo: 250 });

 // Define a opção "Aceitar cookies" como "false"
 await page.setCookie({
    name: 'cookieConsent',
    value: 'false',
    domain: 'https://www.youtube.com'
  });

 

await page.setDefaultNavigationTimeout(60000); // define o tempo limite para 60 segundos para a página carregar
await page.goto("https://www.youtube.com");

//await page.waitForNavigation(); // aguarda a navegação até a página ser carregada

// Define o idioma da página como português
//await page.setExtraHTTPHeaders({"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",});

// Define a largura e altura da janela do navegador
await page.setViewport({
width: 1280,
height: 720,
});

// para esperar até que o campo de pesquisa esteja disponível na página antes de preenchê-lo
await page.waitForSelector('input[placeholder="Pesquisar"]', { timeout: 20000 }); 
//await page.waitForSelector('input[id="search"]', { timeout: 20000 });

// Procurando o canal BlackReaper no Youtube
await page.type('input[id="search"]',"BlackReaper");
//await page.type('input[placeholder="Pesquisar"]', "BlackReaper");
//await page.waitForNavigation();
await page.keyboard.press("Enter");
await page.waitForNavigation();
//await page.waitForSelector('a[id="channel-title"]', { timeout: 20000 });
//await page.keyboard.press("Enter");
//await page.click('button[id="search-icon-legacy"]');



// Desconectando do navegador mas mantem o navegador aberto
await browser.disconnect();

// Fechando o navegador
//await browser.close();
}

run();






