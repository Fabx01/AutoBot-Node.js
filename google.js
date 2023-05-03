// Require Puppeteer 
const puppeteer = require("puppeteer");


/* Puppeteer é uma biblioteca que já vem com um Chromium embutido
Quando o Puppeteer é iniciado, ele inicia o Chromium automaticamente e o controla programaticamente.
const browser = await puppeteer.launch() já inicia o navegador que será utilizado pelo 
Puppeteer. Além disso, a opção args passada como parâmetro para o método puppeteer.launch() 
é responsável por configurar o Chromium que será iniciado, nesse caso, definindo algumas 
configurações de segurança.
*/
async function run() {
  // Iniciando o navegador Chrome
  const browser = await puppeteer.launch({
    headless: false, // mude para true se você não quiser ver o navegador
    args: [
      '--no-sandbox', // Desabilita o sandbox de segurança do Chromium
      '--disable-setuid-sandbox', // Desabilita o uso do setuid para criar um sandbox
      '--disable-dev-shm-usage', // Desabilita o compartilhamento de memória entre processos
      '--disable-notifications' // Desabilita as notificações do sistema
    ],
  });

  // Criando uma nova página e navegando para o Google
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(60000); // define o tempo limite para 60 segundos
  await page.goto("https://www.google.com");

  // para esperar até que o campo de pesquisa esteja disponível na página antes de preenchê-lo
  await page.waitForSelector('textarea[type="search"]', { timeout: 20000 });

  // Procurando o canal do YouTube BlackReaper no google
  await page.type('textarea[name="q"]', "BlackReaper");
  await page.keyboard.press("Enter");
  await page.waitForNavigation();

  // Desconectando do navegador mas mantem o navegador aberto
  await browser.disconnect();

   // Fechando o navegador
  //await browser.close();
}

run();