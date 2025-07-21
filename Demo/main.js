const fs = require("fs");

// Read file (non-blocking)
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log("File content:", data);
});

console.log("I am printed IMMEDIATELY!");
