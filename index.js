const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      res.write("Ini Halaman About");
    } else {
      res.write("Hello World!");
    }

    res.end();
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000...");
  });
