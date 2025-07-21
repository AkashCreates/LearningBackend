const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My Second Server</title></head>");
    res.write("<body>");
    res.write("<h1>Enter your details:</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<input type='text' name='name' placeholder='Enter your name'>");
    res.write("<br><br>");
    res.write("<label for='gender'>Gender:</label>");
    res.write("<input type='radio' id='male' name='gender' value='male'>");
    res.write("<label for='male'>Male</label>");
    res.write("<input type='radio' id='female' name='gender' value='female'>");
    res.write("<label for='female'>Female</label><br><br>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {

    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

       fs.writeFileSync("user.txt", JSON.stringify(bodyObject));

    });

    res.statusCode = 302; // Redirect status code
    res.setHeader("Location", "/");
    return res.end();
  }

  // Default 404 Route
  res.statusCode = 404;
  res.write("<html>");
  res.write("<head><title>Not Found</title></head>");
  res.write("<body>");
  res.write("<h1>404 - Page Not Found</h1>");
  res.write("<ul><li>Back to <a href='/'>Form</a></li></ul>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});







// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   res.setHeader("Content-Type", "text/html");

//   if (req.url === "/") {
//     res.write("<html>");
//     res.write("<head><title>My Second Server</title></head>");
//     res.write("<body>");
//     res.write("<h1>Enter your details:</h1>");
//     res.write("<form action='/submit-details' method='POST'>");
//     res.write("<input type='text' name='name' placeholder='Enter your name'>");
//     res.write("<br><br>");
//     res.write("<label for='gender'>Gender:</label>");
//     res.write("<input type='radio' id='male' name='gender' value='male'>");
//     res.write("<label for='male'>Male</label>");
//     res.write("<input type='radio' id='female' name='gender' value='female'>");
//     res.write("<label for='female'>Female</label><br><br>");
//     res.write("<button type='submit'>Submit</button>");
//     res.write("</form>");
//     res.write("</body>");
//     res.write("</html>");
//     return res.end();
//   } else if (
//     req.url.toLowerCase() === "/submit-details" &&
//     req.method === "POST"
//   ) {
//     let body = "";

//     // Collect data chunks
//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     // All data received
//     req.on("end", () => {
//       console.log("Form Data:", body); // e.g., name=Akash&gender=male
//       res.end("Form submitted successfully!");
//      });
//     return;
//   }  

//   // Default 404 Route
//   res.statusCode = 404;
//   res.write("<html>");
//   res.write("<head><title>Not Found</title></head>");
//   res.write("<body>");
//   res.write("<h1>404 - Page Not Found</h1>");
//   res.write("<ul><li>Back to <a href='/'>Form</a></li></ul>");
//   res.write("</body>");
//   res.write("</html>");
//   res.end();
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
