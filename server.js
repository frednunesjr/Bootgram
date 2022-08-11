const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(3000, "localhost");

server.on("listening", () => {
    console.log(`O servidor está rodando ${server.address().address}:${server.address().port}`);
});

server.on("request", () => {
    console.log();
});