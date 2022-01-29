const https = require("https");

const start = Date.now();



https.request("https://www.google.com", (res) => {
  res.on("data", () => { });
  res.on("end", () => {

    const end = Date.now();

    console.log(`Duration: ${end - start}`);
  });
}).end();