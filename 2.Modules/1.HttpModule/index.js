const http = require('node:http');
const port = 8089;

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url == "/") {
        res.end("welcome");
    } else if (url === "/abouts") {
        res.end("utkarsh website creator");
    }
});

server.listen(port, () => {
    console.log("thumbs up I am listining on port", port);
})
