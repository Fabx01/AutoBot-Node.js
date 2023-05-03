const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Define um atraso de 250ms entre as ações do Puppeteer
  await page.setDefaultNavigationTimeout(0); //desabilita o timeout da pagina para não dar erro de timeout
  await page.setDefaultTimeout(0);//desabilita o timeout da pagina para não dar erro de timeout


  // Desabilita o cache e o JavaScript para garantir que obtemos a versão mais recente da página
  await page.setCacheEnabled(false);

  // Habilita o JavaScript
  await page.setJavaScriptEnabled(true);

  //definir a largura e altura da janela do navegador
  await page.setViewport({
    width: 1280,
    height: 720
  });

  await page.setExtraHTTPHeaders({
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
  });

  await page.goto('https://www.google.com.br', { waitUntil: 'networkidle0' });
  
  // Realize outras ações com a página aqui
  
  await browser.close();
})();
