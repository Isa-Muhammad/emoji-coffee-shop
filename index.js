const fs = require("fs");
const http = require("http");

const data = fs.readFileSync("./data/data.json", "utf-8");

const homeTemp = fs.readFileSync("./templates/home.html", "utf-8");

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/" || path === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(homeTemp);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("Not found!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000");
});
