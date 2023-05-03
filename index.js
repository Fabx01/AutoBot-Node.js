const puppeteer = require("puppeteer");

// configurando o navegador
async function run() {
    const browser = await puppeteer.launch({
      headless: false, // mude para true se você não quiser ver o navegador
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' // caminho do Google Chrome no meu PC
    });
}


//esperar a página carregar
page.waitForSelector('input[name="q"]', {visible: true}, {timeout: 3000});