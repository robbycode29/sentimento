const puppeteer = require('puppeteer-core');

var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
  // const url = req.query.url;
  const url = 'https://wsa-test.vercel.app/';

  try {
    const browser = await puppeteer.launch({
      executablePath: process.env.CHROMIUM_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(url, { timeout: 10000 });

    await page.waitForSelector('div > div > div > div > div > div > div');
    await page.waitForSelector('div >>> img');

    const texts = await page.$$eval('div > div > div > div > div > div > div', (elements) => {
      const texts = elements.map((element) => {
        return element.innerText.split('\n').filter((text) => text !== '');
      });
      return [...new Set(texts.flat(1))];
    });
    
    let textSections = [];

    for (let i = 0; i < texts.length; i+=5) {
      textSections.push(texts.slice(i, i+5));
    }

    let sections = [];

    textSections.forEach((textSection) => {
      const section = {
        genre: '',
        title: '',
        short_description: '',
        author: '',
        author_description: '',
      };
      section.genre = textSection[0];
      section.title = textSection[1];
      section.short_description = textSection[2];
      section.author = textSection[3];
      section.author_description = textSection[4];
      sections.push(section);
    })

    await browser.close();

    res.json(sections);

  } catch (error) {
    res.status(500).json({ error: 'Scraping failed', message: error.message });
  }
});

module.exports = router;