// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello Akash! This is your first server 🚀');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);

//   if (req.url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Server</title></head>");
//     res.write("<body>");
//     res.write("<h1>Welcome to my first server!</h1>");
//     res.write("<p>This is a simple Node.js server.</p>");
//     res.write("<p>Feel free to explore!</p>");
//     res.write("</body>");
//     res.write("</html>");
//   } else if (req.url === "/home") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Server</title></head>");
//     res.write("<body>");
//     res.write("<h1>Welcome to my first server!</h1>");
//     res.write("<p>This is a simple Node.js server.</p>");
//     res.write("<p>Feel free to explore!</p>");
//     res.write("<ul>");
//     res.write("<li>Home</li>");
//     res.write("</ul>");
//     res.write("</body>");
//     res.write("</html>");
//   } else if (req.url === "/about") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Server</title></head>");
//     res.write("<body>");
//     res.write("<h1>Welcome to my first server!</h1>");
//     res.write("<p>This is a simple Node.js server.</p>");
//     res.write("<p>Feel free to explore!</p>");
//     res.write("<ul>");
//     res.write("<li>About</li>");
//     res.write("</ul>");
//     res.write("</body>");
//     res.write("</html>");
//   } else if (req.url === "/contact") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Server</title></head>");
//     res.write("<body>");
//     res.write("<h1>Welcome to my first server!</h1>");
//     res.write("<p>This is a simple Node.js server.</p>");
//     res.write("<p>Feel free to explore!</p>");
//     res.write("<ul>");
//     res.write("<li>Contact</li>");
//     res.write("</ul>");
//     res.write("</body>");
//     res.write("</html>");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on address http://localhost:${PORT}`);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Server</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to my first server!</h1>");
    res.write("<p>This is a simple Node.js server.</p>");
    res.write("<p>Feel free to explore!</p>");
    res.write("</body>");
    res.write("</html>");
    res.end();
    return;
  }

  if (req.url === "/home") {
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body>");
    res.write("<h1>Home Page</h1>");
    res.write("<ul><li>Home</li></ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
    return;
  }

  if (req.url === "/about") {
    res.write("<html>");
    res.write("<head><title>About</title></head>");
    res.write("<body>");
    res.write("<h1>About Page</h1>");
    res.write("<ul><li>About</li></ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/contact") {
    res.write("<html>");
    res.write("<head><title>Contact</title></head>");
    res.write("<body>");
    res.write("<h1>Contact Page</h1>");
    res.write("<ul><li>Contact</li></ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>Default</title></head>");
  res.write("<body>");
  res.write("<h1>Default Page</h1>");
  res.write("</body>");
  res.write("</html>");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
