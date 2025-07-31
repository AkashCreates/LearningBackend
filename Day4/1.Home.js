////// res Method / Property
// res.setHeader(name, value)
// res.setHeader(name, value)
// res.statusCode = 200
// res.write(data)
// res.end([data])
// res.getHeader(name)
// res.removeHeader(name)
// res.statusMessage = "OK"

///// Key–Value Pairs
// key ->  1. Content-Type
//   res.setHeader('Content-Type', 'text/plain');

// "text/plain"
// Plain text

// "text/html"
// HTML content

// "application/json"
// JSON response

// "text/css"
// CSS file

// "application/javascript"
// JavaScript file

// "image/png"
// PNG image

// "image/jpeg"
// JPEG image

// "application/pdf"
// PDF documents

// // key  2. Access-Control-Allow-Origin
// res.setHeader("Access-Control-Allow-Origin", "*");

// "*"
// Allow all origins (not secure)

// "http://example.com"
// Allow only specific origin

// key 3. Cache-Control
// res.setHeader("Cache-Control", "no-store");

// "no-cache"
// Always revalidate

// "no-store"
// Never store in cache

// "public, max-age=3600"
// Cache for 1 hour

// "private, max-age=600"
// Cache for 10 mins (per user)

// key 4. Content-Disposition
// res.setHeader("Content-Disposition", "attachment; filename='report.pdf'");

// "attachment; filename='file.pdf'"
// Force file download

// // key  5. Location
// res.writeHead(302, { "Location": "https://example.com" });
// res.end();

// key 6. Set-Cookie
// res.setHeader("Set-Cookie", "sessionId=abc123; HttpOnly");

// key  7. X-Content-Type-Options
// res.setHeader("X-Content-Type-Options", "nosniff");

// const http = require("http");

// http
//   .createServer((req, res) => {
//     // Using writeHead
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello using writeHead");
//   })
//   .listen(8080);

// //   or
// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello using setHeader");
//   })
//   .listen(8080);

// const os = require("os");
// console.log(os.platform());


