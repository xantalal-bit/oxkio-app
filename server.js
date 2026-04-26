const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const server = http.createServer((req, res) => {
  let filePath = req.url === "/" ? "/index.html" : req.url;
  filePath = path.join(ROOT, filePath.split("?")[0]);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200);
    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Oxkio running on port ${PORT}`);
});
