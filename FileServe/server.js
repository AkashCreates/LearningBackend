const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.readFile("FileServe/index.html", "utf-8", function (err, data) {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404);
      res.end("not found");
    }
  })
  .listen(3030);
