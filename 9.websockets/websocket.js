const http = require('node:http');
const express = require("express");
const expressServer = express();
const httpServer = http.createServer(expressServer);
const fs = require('node:fs');
const WebsocketServer = require('websocket').server;

const PORT = 8089;


// --------------- express server --------------------

expressServer.use(express.json());

// middleware where you check the login and change the req // 
// expressServer.post("/login", (req, res) => {
//     const {username, password} = req.body;
//     // db check and check username and password 
//     req.user = username;
// })



expressServer.get("/chat" ,(req, res) => {
        res.writeHead(200, {'content-type': 'text/html'});
        const chatHTML = fs.readFileSync('./index.html');
        res.end(chatHTML);
})



// --------------  create WebSocket server --------------- 
const wsServer = new WebsocketServer({
    httpServer: httpServer,
    autoAcceptConnections: false
});

let connections = [];

wsServer.on('request', (request) => {
    // Accept the local connection
    const requestOrigin = request.origin; // from where the client is calling our Server, ex:  http://localhost:8089
    const hosterWs = "http://localhost:8089";

    // you are an outsider
    if(requestOrigin !== hosterWs) {
        request.reject();
        return;
    }

    // Accept the connection
    const connection = request.accept(null, requestOrigin); // 1 
    connections.push(connection);
    console.log('New WebSocket connection accepted. Total connections:', connections.length);


    // notify other connections 
    connections.forEach((conn) => {
        // it will notify all the other connections except who is joining
        if(conn !== connection) {
            conn.sendUTF("A user joined in");
        }
    });

    const uniqueIdentifer = connection.socket.remotePort;

    // hear for message 
    connection.on("message", (message) => {
        // save here // db call -> track the messages uniqueIdentifer : message

        if(message.type === "utf8") {
            connections.forEach((conn) => {
                conn.sendUTF(`User ${uniqueIdentifer} : ` + message.utf8Data);
            });
        }
       
    });


    // close the connection
    connection.on("close", () => {
        console.log('WebSocket connection closed');
        connections = connections.filter((conn) => conn !== connection);

        connections.forEach((conn) => {
            conn.sendUTF(`A user left the chat `, uniqueIdentifer);
        });
    })

});


httpServer.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});






