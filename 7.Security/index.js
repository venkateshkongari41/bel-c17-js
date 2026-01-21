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


// const express = require('express');
// const PORT = 8089;
// const server = express();

// server.get("/api/v1/auth/hello", (req, res) => {

//     const name = req.query.name;

//     res.status(200).send(`<h1 id="hello"> Hello ${name} </h1>`)
//     // 

//     // `<h1> Hello <script>console.log("aaaa")</srcipt> </h1>`
//     // `<h1> Hello <script>document.cokkies</srcipt> </h1>`
// });

// PREVENTION 
// 1. sanatization 
// 2. hTML escape 
 

// ---------- stored XSS -------------------
// every user that open the page will be affected


// DOM XSS 
// here the element.innerHTML = "<h2> hello 2  </h2>" - this is dangerous 


// ------------ CSRF attack - Cross site request forgery ------------------

// </form method="poSt" csrf = >



// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// PROBLEM //  DDOS attack - distributed denial of service attack  - multiple systems attack a single system
// -------------- Rate Limiting ------------------

// const expressRateLimit = require('express-rate-limit');

// const express = require('express');
// const PORT = 8089;
// const server = express();

// const limiter = expressRateLimit({
//     windowMs: 1 * 60 * 1000, // 1 minutes
//     max: 3, // limit each IP to 100 requests per windowMs
//     message: 'Too many requests from this IP, please try again after a minute',
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });


// server.use(limiter);




// server.get("/api/v1/hello", (req, res) => {

//     res.status(200).send(`<h1 id="hello"> Hello User </h1>`)
    
// });


// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// READ:  if you want to implement rate limiting yourself: The Token Bucket algorithm is a network traffic control method that limits data rates by analogy


//  --------- THIRD PARTY Node js Security  ------------
// 1. 3rd party packages vulnerabilities 
  /**
   * my code : 5%
   * dependency : express - 95%
   */

  // real ATTACK: postinstall script 

  // HOW TO PROTECT YOURSELF
  /**
   * 1. npm audit
   * 2. use only popular packages 
   * 3. keep your packages updated 
   * 4. use tools like snyk 
   */

//   .npmrc file 
//   audit-level=moderate
//   save-exact=true



//  attacks 
/**
 * 1. typosquatting 
 * 2. dependency confusion 
 * 3. postinstall script
 * 
 * -> https://security.snyk.io/vuln/SNYK-JS-LODASH-608086
 * -> event stream npm attack
 *  
 */