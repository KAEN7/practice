const puppeteer = require("puppeteer");
// const puppeteer = require("puppeteer-extra");

// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// puppeteer.use(StealthPlugin());

const userAgentList = [
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 Edg/101.0.1210.32",
	"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
];

const puppeteers = async (url) => {
	let randomNum = Math.floor(Math.random() * userAgentList.length);

	const browser = await puppeteer.launch({
		waitUntil: "networkidle2",
		headless: true,
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	});

	const data = {};

	const page = await browser.newPage();

	// await page.setExtraHTTPHeaders({});

	await page.setUserAgent(userAgentList[randomNum]);

	await page.setDefaultTimeout(0);

	await page.setBypassCSP(true);

	await page.goto(url, { waitUntil: "networkidle2", timeout: 5000 });

	await Promise.all([await page.waitForTimeout(5000)]);

	try {
		data.holders = await page.$eval(
			"#ContentPlaceHolder1_tr_tokenHolders > div > div.col-md-8 > div > div.mr-3",
			(el) => {
				return el.textContent;
			}
		);

		data.transfers = await page.$eval("#totaltxns", (el) => {
			return el.textContent;
		});
	} catch (err) {
		console.error(url, err);

		data.holders = " ";
		data.transfers = " ";
	}

	await browser.close();
	console.log("data", data);
	return data;
};

module.exports = puppeteers;
