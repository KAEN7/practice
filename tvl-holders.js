require("dotenv").config();
const { google } = require("googleapis");

const getAPI = require("./getAPI.js");
console.time("time");

async function tvlHolders() {
  const keys = require("./spreadsheet-346508-4fbcf9f6bda7.json");

  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  client.authorize(function (err, tokens) {
    try {
      sheetRun(client);
    } catch {
      console.err(err);
    }
  });

  const newDates = () => {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let date = newDate.getDate();

    return `${year}.${month}.${date}`;
  };

  async function sheetRun(client) {
    const sheets = google.sheets({ version: "v4", auth: client });

    const data = [
      { name: "dateArr", url: "", arr: [] },
      {
        name: "all",
        url: `${process.env.BASIC_URL}tvl`,
        arr: [newDates()],
      },
      {
        name: "ethereum mainnet",
        url: `${process.env.NETWORK_URL}${process.env.ETHER}`,
        arr: [],
      },
      {
        name: "BSC mainnet",
        url: `${process.env.NETWORK_URL}${process.env.BSC}`,
        arr: [],
      },
      {
        name: "polygon matic mainnet",
        url: `${process.env.NETWORK_URL}${process.env.POLYGON}`,
        arr: [],
      },
      {
        name: "circulating supply",
        url: `${process.env.BASIC_URL}circulatingSupply`,
        arr: [],
      },
      {
        name: "ETH",
        url: `https://api.ethplorer.io/getTokenInfo/${process.env.PERI_TOKEN}?apiKey=freekey`,
        arr: [],
      },
      {
        name: "BSC",
        url: "https://bscscan.com/token/0xb49B7e0742EcB4240ffE91661d2A580677460b6A",
        arr: [],
      },
      {
        name: "POLYGON",
        url: "https://polygonscan.com/token/0xDC0E17eAE3B9651875030244b971fa0223a1764f",
        arr: [],
      },
      {
        name: "MOONRIVER",
        url: "https://moonriver.moonscan.io/token/0x50A86f6abeb1c90719fF1F5d5B86A7e304B7593F",
        arr: [],
      },
      {
        name: "TWITTER",
        url: `https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=PERIfinance`,
        arr: [],
      },
    ];

    // 읽어오기
    const readReq = {
      spreadsheetId: `${process.env.SPREADSHEET_ID}`,
      range: "TVL_HOLDERS", // sheet!A0:AP0
    };

    const readRes = (await sheets.spreadsheets.values.get(readReq)).data;

    const statisticsArr = [];
    await getAPI(data).then((res) =>
      res.forEach((el) => statisticsArr.push(...el.arr))
    );

    const addRequest = {
      spreadsheetId: `${process.env.SPREADSHEET_ID}`,
      range: `TVL_HOLDERS!A${readRes.values.length + 1}:AP${
        readRes.values.length + 1
      }`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      resource: { values: [statisticsArr] },
    };

    await sheets.spreadsheets.values.append(addRequest);

    console.timeEnd("time");
  }
}

tvlHolders();
