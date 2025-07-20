const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

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
  } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    fs.writeFileSync("user.txt", "User details submitted successfully!");
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
