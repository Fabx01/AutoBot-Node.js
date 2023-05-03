const puppeteer = require('puppeteer');

async function run() {
  // Iniciando o navegador Chrome
  const browser = await puppeteer.launch({
    headless: false, // Alterar para true se você não quiser ver o navegador
    ignoreDefaultArgs: ['--enable-automation'], // Usado para evitar a exibição da janela de login
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-notifications', // Usado para desativar as notificações
    ],
  });

  // Criando uma nova página e navegando para o YouTube
  const page = await browser.newPage({ slowMo: 250 });
  await page.setDefaultNavigationTimeout(60000); // Define o tempo limite para 60 segundos
  await page.setViewport({ width: 1366, height: 768 }); // adicionando o ajuste de tamanho da viewport
  await page.goto('https://www.youtube.com/');

  // Espera até que o campo de pesquisa esteja disponível na página antes de preenchê-lo
  await page.waitForSelector('input[name="search_query"]', { timeout: 10000 });

  // Pesquisando o canal "Ei Nerd" no YouTube
  const searchInput = 'input[name="search_query"]';
  const channelName = 'Ei Nerd';
  await page.type(searchInput, channelName);
  await page.keyboard.press('Enter');

  const pensando = Math.floor(Math.random() * 3000) + 1000;
  await page.waitForTimeout(pensando);

  // Espera até que o canal seja carregado
  const channelLink = `a[href*="/c/${channelName}"]`;
  await page.waitForSelector(channelLink, { timeout: 20000 });

  // Clicando no canal
  await page.click(channelLink);
  await page.waitForNavigation();

  // Espera um tempo estipulado para que o botão de seguir esteja disponível
  await page.waitForSelector('yt-formatted-string[id="subscriber-count"]', { timeout: 20000 });

  // adicionando um tempo de espera aleatório antes de clicar no botão de seguir para tornar o comportamento mais humano
  const delay = Math.floor(Math.random() * 3000) + 1000;
  await page.waitForTimeout(delay);

  // Clicando no botão de seguir
  await page.click('paper-button[aria-label="Inscrever-se no Ei Nerd"]');
  await page.waitForSelector('paper-button[aria-label="Inscrito"]');

  // adicionando um tempo de espera após seguir o canal para garantir que a operação seja concluída
  await page.waitForTimeout(5000);

  // Desconectando do navegador, mas mantém o navegador aberto
  await browser.disconnect();

  // Fechando o navegador
  // await browser.close();
}

run();
