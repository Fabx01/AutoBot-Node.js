const puppeteer = require("puppeteer");

async function run() {
  // Iniciando o navegador Chrome
  const browser = await puppeteer.launch({
    headless: false, // mude para true se você não quiser ver o navegador
    ignoreDefaultArgs: ['--enable-automation'], //usado para evitar a exibição da janela de login
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-notifications", //usado para desativar as notificações
    ],
  });

  // Criando uma nova página e navegando para o TikTok
  //const page = await browser.newPage();

  // Define um atraso de 250ms entre as ações do Puppeteer
  const page = await browser.newPage({ slowMo: 250 });


  await page.setDefaultNavigationTimeout(60000); // define o tempo limite para 60 segundos
  await page.goto("https://www.tiktok.com/");

  // para esperar até que o campo de pesquisa esteja disponível na página antes de preenchê-lo
 // await page.waitForSelector('input[placeholder="Procurar"]', { timeout: 20000 }); placeholder pode mudar 
  await page.waitForSelector('input[type="search"]', { timeout: 10000 });

  // Procurando o canal BlackReaper no TikTok
  await page.type('input[type="search"]',"fabx001");
  await page.keyboard.press("Enter");
  //await page.waitForNavigation();

  // espera um tempo estipulado para que o campo estaja disponivel
  await page.waitForSelector('a[href*="/@fabx001"]', { timeout: 20000 });
  // Clicando no canal
  await page.click('a[href*="/@fabx001"]');
  await page.waitForNavigation();

  // espera um tempo estipulado para que o campo estaja disponivel
  //await page.waitForSelector('button[aria-label="Seguir Fabx01"]', { timeout: 10000 });

  // Clicando no botão de seguir
  // await page.click('button[aria-label="Seguir Fabx01"]');
  //await page.click('button[type="button"]');
  //await page.click(a[href="https://www.tiktok.com/@fabx001/video/7223970570533162246"]');


  // await page.$('button[type="button"]'); // seleciona o botão de seguir


  // Desconectando do navegador mas mantem o navegador aberto
  await browser.disconnect();

  // Fechando o navegador
  //await browser.close();
}

run();
