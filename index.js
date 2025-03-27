const fs = require("fs");
const http = require("http");
const replaceTemplate = require("./modules/replaceTemplate");

const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const parsedData = JSON.parse(data);

const cardTemp = fs.readFileSync(
  `${__dirname}/templates/card-template.html`,
  "utf-8"
);

const homeTemp = fs.readFileSync(
  `${__dirname}/templates/home-template.html`,
  "utf-8"
);
const productTemp = fs.readFileSync(
  "./templates/product-template.html",
  "utf-8"
);

const server = http.createServer((req, res) => {
  const path = req.url;

  // Home page
  if (path === "/" || path === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHTML = parsedData
      .map((el) => replaceTemplate(cardTemp, el))
      .join("");

    const output = homeTemp.replace("{%CARDS%}", cardsHTML);

    res.end(output);

    // Product page
  } else if (path === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(productTemp);

    // Not found page
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("Not found!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000");
});
