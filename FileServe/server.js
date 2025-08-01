// const http = require("http");
// const fs = require("fs");

// http
//   .createServer(function (req, res) {
//     console.log(req.url);
//     if (req.url === "/") {
//       fs.readFile("FileServe/index.html", "utf-8", function (err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(data);
//         }
//       });
//     } else {
//       res.writeHead(404);
//       res.end("not found");
//     }
//   })
//   .listen(3030);

const http = require("http");
const fs = require("fs");
// const path = require("path");

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/" || req.url === "/index.html") {
      fs.readFile("FileServe/index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.url === "/style.css") {
      fs.readFile("FileServe/style.css", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      });
    } else if (req.url === "/script.js") {
      fs.readFile("FileServe/script.js", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(data);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  })
  .listen(3030);

console.log("Server running at http://localhost:3030");
