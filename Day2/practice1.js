const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<body>");
    res.write("<h2>Welcome to Myntra</h2>");
    res.write("<ol type='A'>");
    res.write("<li><a href='/Home'>Home</a></li>");
    res.write("<li><a href='/Men'>Men</a></li>");
    res.write(" <li><a href='/Women'>Women</a></li>");
    res.write(" <li><a href='/Kids'>Kids</a></li>");
    res.write("<li><a href='/Cart'>Cart</a></li>");
    res.write("</ol>");
    res.write("</body>");
    return res.end();
  }
  if (req.url.toLowerCase() === "/home") {
    res.write("<h1>Welcome to home section</h1>");
     res.write("<ul><li>Back to <a href='/'>First</a></li></ul>");
    return res.end();
  }
  if (req.url.toLowerCase()  === "/men") {
    res.write("<h1>Welcome to men section</h1>");
     res.write("<ul><li>Back to <a href='/'>First</a></li></ul>");
    return res.end();
  }
  if (req.url.toLowerCase()  === "/women") {
    res.write("<h1>Welcome to women section</h1>");
     res.write("<ul><li>Back to <a href='/'>First</a></li></ul>");
    return res.end();
  }
  if (req.url.toLowerCase()  === "/kids") {
    res.write("<h1>Welcome to kids section</h1>");
     res.write("<ul><li>Back to <a href='/'>First</a></li></ul>");
    return res.end();
  }
  if (req.url.toLowerCase()  === "/cart") {
    res.write("<h1>Welcome to cart section</h1>");
     res.write("<ul><li>Back to <a href='/'>First</a></li></ul>");
    return res.end();
  }

  res.statusCode = 404;
  res.write("<html>");
  res.write("<head><title>Not Found</title></head>");
  res.write("<body>");
  res.write("<h1>404 - Page Not Found</h1>");
  res.write("<ul><li>Back to <a href='/'>First</a></li></ul>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
