const http = require("http");
const handler = require("./user");
const server = http.createServer(handler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
