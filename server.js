// Minimal test app for Abasthan free tier. Zero dependencies.
const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, app: "abasthan-test-app" }));
    return;
  }
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<!doctype html><html><body><h1>Abasthan test app — OK</h1>" + "<p>Deployed: " + new Date().toISOString() + "</p></body></html>");
});
server.listen(port, () => {
  console.log("listening on " + port);
});
