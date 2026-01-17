
// basic what I can see a unstrusted code 
/*
function CreateCourse(req, res, next) {
    const name = req.body.name; // unstrusted line 

    const apicall = fetch("outer api") //  unstrusted line  

    const authHeader = req.header.authroization // unstrusted line   

    courses.push(body);
    res.send(courses);
}
*/

// whats the difference in Encoding, hashing and encryption 

//--------  encoding --------- 
/**
 * Base64
 * purpose - used for sending binary 
 * security - None 
 */


// const message = "hello world this is encoding";
// const encoded = Buffer.from(message).toString("base64");
// // aGVsbG8gd29ybGQgdGhpcyBpcyBlbmNvZGluZw==
// console.log(encoded, 'encoded')


// // decode. 

// const decodedmessage = Buffer.from(encoded, "base64").toString();
// console.log(decodedmessage, 'decodedmessage')


//  --------------------   hashing --------------------- 
/**
 * sha256 (not for passwords) 
 * purpose - to provide unique fingerprint 
 * security - we cant reverse the hash data to data  
 */

// const crypto = require("node:crypto");

// const data = "hello hash";
// function sha256(data) {
//   return crypto
//     .createHash("sha256")
//     .update(data)
//     .digest("hex");
// }


// const result = sha256(data);
// console.log("result", result)

/**
 * Md5 (NEVER USE THIS) 
 * purpose - to provide unique fingerprint 
 * security - we cant reverse the hash data to data  
 * fast - 
 * // this has collisions 
 */

// const crypto = require("crypto");

// const data1 = `
// d131dd02c5e6eec4693d9a0698aff95c
// 2fcab58712467eab4004583eb8fb7f89
// 55ad340609f4b30283e488832571415a
// 085125e8f7cdc99fd91dbdf280373c5b
// d8823e3156348f5bae6dacd436c919c6
// dd53e2b487da03fd02396306d248cda0
// e99f33420f577ee8ce54b67080a80d1e
// c69821bcb6a8839396f9652b6ff72a70
// `;

// const data2 = `
// d131dd02c5e6eec4693d9a0698aff95c
// 2fcab50712467eab4004583eb8fb7f89
// 55ad340609f4b30283e488832571415a
// 085125e8f7cdc99fd91dbdf280373c5b
// d8823e3156348f5bae6dacd436c919c6
// dd53e23487da03fd02396306d248cda0
// e99f33420f577ee8ce54b67080280d1e
// c69821bcb6a8839396f9652b6ff72a70
// `

// const bufferData1 = Buffer.from(data1, "hex");
// const bufferData2 = Buffer.from(data2, "hex");

// const hashA = crypto.createHash("md5").update(bufferData1).digest("hex");
// const hashB = crypto.createHash("md5").update(bufferData2).digest("hex");

// console.log(hashA === hashB); // true

/**
 * Md5 (NEVER USE THIS) 
 * purpose - to provide unique fingerprint 
 * security - we cant reverse the hash data to data  
 * 
 * 
 */


// const stolenHash = "1adbb3178591fd5bb0c248518f39bf6d";


// // dictonary 
// const commonPasswords = [
//     "asdf1234",
//     "aeroplane",
//     "Admin@123",

// ]

// const start = Date.now()
// for(let item in commonPasswords) {
//     const hashA = crypto.createHash("md5").update(item).digest("hex")

//     if(stolenHash === hashA) {
//         const timeElapsed = Date.now() - start
//         break;
//     }

// }


//  ------- encryption --------------- 
/**
 * purpose - protects confedential data 
 * 
 * 
 * 
 * 
 */

// read about it:  public and private key 
// JWE stands for JSON Web Encryption
// https://www.geeksforgeeks.org/computer-networks/diffie-hellman-key-exchange-and-perfect-forward-secrecy/ 
// https://www.geeksforgeeks.org/computer-networks/rsa-algorithm-cryptography/
// unpishiable - passkeys









