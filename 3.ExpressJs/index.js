const express = require('express');
const server = express();
const PORT = 8089;

server.get('/api/v1/', (req, res) => {
    res.send('Hello, World! express');
});

server.post('/api/v1/', (req, res) => {
    res.send('Hello, World! express POST');
});

server.get('/api/v1/abouts', (req, res) => {
    res.send('abouts express!');
});



/**
 * USE NOUNS not VERBS 
 * 
 * get all user
 * 
 * GET:  /api/v1/getAllUsers - WRONG
 * GET:  /api/v1/users - RIGHT
 * 
 * create a new user 
 * POST: /api/v1/users
 * 
 * 
 * delete the user 
 * DELETE: /api/v1/users/10
 * 
 * 
 */


// query params -  https://www.google.com/search?q=sachin 

server.get('/api/v1/users', (req, res) => {

    const queryParams = req.query;
    const gender = queryParams.gender 
    const age = queryParams.age
    if(!gender ) {
        throw Error("where is gender mate")
    }


    res.send("user you want to search for gender " + gender + " " + age);
});


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});