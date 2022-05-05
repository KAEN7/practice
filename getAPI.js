const axios = require("axios");

const puppeteer = require("./puppeteer.js");

const getAPI = async (data) => {
  for (let i of data) {
    if (i.name === "ETH") {
      await axios
        .get(i.url)
        .then((res) =>
          i.arr.push(res.data.holdersCount, res.data.transfersCount)
        )
        .catch(() => i.arr.push("", ""));
    } else if (i.name === "TWITTER") {
      await axios
        .get(i.url)
        .then((res) => i.arr.push(res.data[0].followers_count))
        .catch(() => i.arr.push(""));
    } else if (
      i.name === "BSC" ||
      i.name === "POLYGON" ||
      i.name === "MOONRIVER"
    ) {
      const crawlingData = await puppeteer(i.url);

      i.arr.push(
        crawlingData.holders.replace(/ /gi, "").replace("addresses", ""),
        crawlingData.transfers
      );
    } else {
      i.url !== "" &&
        (await axios
          .get(i.url)
          .then((res) => i.arr.push(Math.floor(res.data)))
          .catch(() => i.arr.push("")));
    }
  }

  return data;
};

module.exports = getAPI;
