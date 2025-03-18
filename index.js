const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome to emoji coffee shop!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000");
});
