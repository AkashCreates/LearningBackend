const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
    res.write("<head><title>My First Server</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to my first server!</h1>");
    res.write("<p>This is a simple Node.js server.</p>");
    res.write("<p>Feel free to explore!</p>");
    res.write("<ul>");
    res.write("<li>Home</li>");
    res.write("<li>About</li>");
    res.write("<li>Contact</li>");
    res.write("</ul>");
    res.write("</body>");
  res.write("</html>");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
