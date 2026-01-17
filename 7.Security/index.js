//  XSS, CSRF attack, rate limiting, DDOS 

// ------------ Cross Site Scripting -------------------

// xss = some js inside browser
// reflected xss 
// stored xss - Dangerous and can take out everyone 
// DOM xss - innerHTML 


// ------ reflected xss  ------

// query params : 

/**
 * FrontEnd Request 
    http://localhost:8089/api/v1/hello?name=utkarsh

 */


const express = require('express');
const PORT = 8089;
const server = express();

server.get("/api/v1/auth/hello", (req, res) => {

    const name = req.query.name;

    res.status(200).send(`<h1 id="hello"> Hello ${name} </h1>`)
    // 

    // `<h1> Hello <script>console.log("aaaa")</srcipt> </h1>`
    // `<h1> Hello <script>document.cokkies</srcipt> </h1>`
});

// PREVENTION 
// 1. sanatization 
// 2. hTML escape 
 

// ---------- stored XSS -------------------
// every user that open the page will be affected


// DOM XSS 
// here the element.innerHTML = "<h2> hello 2  </h2>" - this is dangerous 


// ------------ CSRF attack - Cross site request forgery ------------------

// </form method="poSt" csrf = >



server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});