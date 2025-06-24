// http
const http = require("http");

const user = { id: 1, name: "Julio", edad: "34" };
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("INICIO");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("ABOUT");
} else if (req.url === "/user") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(user));
}else{
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("PAGINA NO ENCONTRADA");
  }
});

// listener
server.listen(5000, () => {
  console.log(`Server on port 5000`);
});
