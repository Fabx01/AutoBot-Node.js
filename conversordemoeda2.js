const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

const GOOGLE_URL = 'https://www.google.com/search?q=';
const BASE_CURRENCY = readlineSync.question('Informe uma moeda base: ') || 'dolar';
const TARGET_CURRENCY = readlineSync.question('Informe uma moeda desejada: ') || 'real';
const SEARCH_URL = GOOGLE_URL + encodeURIComponent(`${BASE_CURRENCY} para ${TARGET_CURRENCY}`);

async function main() {
  try {
    console.log('Iniciando conversão...');

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(SEARCH_URL);

    await page.waitForSelector('.lWzCpb.a61j6'); // aguarda o elemento carregar na página

    
   //const result = await page.$eval('.lWzCpb.a61j6', el => el.textContent.trim()); 

    //class="lWzCpb a61j6" - pegar o valor da conversão no google atraves da classe(substituir espaço por ponto)
    const result = await page.evaluate(() => { return document.querySelector('.lWzCpb.a61j6').value;});
    


    console.log(`O valor de 1 ${BASE_CURRENCY} em ${TARGET_CURRENCY} é ${result}`);

    await browser.close();
  } catch (error) {
    console.error(error);
  }
}

main();
