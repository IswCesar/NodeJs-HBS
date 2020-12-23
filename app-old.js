const http = require('http');
const { stringify } = require('querystring');

http.createServer((req, res) => {
    res.writeHead(
        200, { 'Content-Type': 'application/json' }
    );

    let out = {
        name: 'César',
        age: '24',
        url: req.url
    }
    res.write(JSON.stringify(out));
    res.end();
}).listen(8080);

console.log("Listening 8080 port");