const puppeteer = require('puppeteer');


// com slowMo definido como 250, cada ação do Puppeteer levará 250 milissegundos para ser executada
(async () => {
    const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage({
    slowMo: 250 // Define um atraso de 250ms entre as ações do Puppeteer
  });

  // waitUntil é definido como 'networkidle0' para garantir que todas as solicitações de rede foram concluídas
  await page.goto('https://www.google.com.br', { waitUntil: 'networkidle0' });
  
  // Realize outras ações com a página aqui
  
  await browser.close();
})();
