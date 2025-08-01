const fs = require("fs");

fs.readFile("Demo/file.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Some error found", err);
    return;
  } else {
    console.log(data);
  }
});
