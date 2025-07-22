const http = require("http");
const { text } = require("stream/consumers");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`
    <html lang="en">

        <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width,    initial-scale=1.0">
             <title>Calculator</title>
        </head>

         <body>
            <center>
                <h1>Welcome to sum Calculator</h1>
                <h3>Your Calculator</h3>
                <a href="/calculator">Calculator</a>

            </center>
         </body>

    </html> 
    `);
    return res.end();
  }

  if (req.url === "/calculator") {
    res.write(`
         <form">
            <label for="num1">Number 1</label>
            <input type="number" id="num1">
            <label for="num2">Number 2</label>
            <input type="number" id="num2">
            <button type="submit">GET SUM</button>

        </form>
        `);
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Your server running at http://localhost:${PORT}`);
});
