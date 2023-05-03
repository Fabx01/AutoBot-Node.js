const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync'); // biblioteca para ler dados do usuário no terminal (console) do node.js (npm install readline-sync) - https://www.npmjs.com/package/readline-sync

console.log('Iniciando conversão...');


async function robo() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';
   // const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&ei=1K8aX9z7D4bT5OUP7vq8oA8&ved=0ahUKEwj1qY7Y9JHrAhXJHbkGHXZrDZQQ4dUDCAc&uact=5&oq=dolar+para+real&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzoECAAQRzoHCAAQsQMQQzoFCAAQsQM6BwgAELEDEEM6BwgAEBQQhwI6BQgAELEDOgUIABCxAzoICAAQsQMQgwE6BQgAEJECOgQIABAKOgQIABANOgYIABANEB46BggAEAoQHjoICAAQCBANEB46CAgAEA0QBRAeOgYIABAWEB46CAgAEA0QBRAeOggIABAIEAcQHlDZBFjZEmDZFGgAcAF4AIABYIgBqQOSAQE0mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwj1qY7Y9JHrAhXJHbkGHXZrDZQQ4dUDCAw&uact=5`;
    const qualquerUrl =`https://www.google.com/search?q=dolar+para+real&oq=dolar&aqs=chrome.1.69i57j35i39i650l2j0i131i433i512l7.2501j0j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(qualquerUrl);


    // await page.screenshot({ path: 'example.png' });

    
    const resultado = await page.evaluate(() => {

        //class="lWzCpb a61j6" - pegar o valor da conversão no google atraves da classe(substituir espaço por ponto)
        return document.querySelector('.lWzCpb.a61j6').value;
    });

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

   // await browser.close();
   await browser.disconnect();
}

robo();

