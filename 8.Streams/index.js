// --------------- STREAMS ------------------

// Streams are used to read or write data in a continuous manner.
// They are especially useful for handling large files or data sources, as they allow you to process data piece by piece without loading the entire content into memory at once.



// BEHIND THE STREAMS : Buffer 
// TYpes of streams: Readable, Writable, Duplex, Transform


//  1. Readable Stream - flowing case 
const fs = require("node:fs");

/*
const readableStream = fs.createReadStream("./largeFile.txt", {
    encoding: "utf-8",
    highWaterMark: 64 * 1024 // 64 KB chunks
})


readableStream.on("data", (kb64Kbchunk) => {
    console.log("----- New Chunk -----" + kb64Kbchunk.length, "bytes" + kb64Kbchunk.toString());
    // processing on that chunk 
})


readableStream.on("end", () => {
    console.log("---- No more data to read ----");
})
*/


// 2. Readable Stream - paused case 
/*
const pausedReadableStream = fs.createReadStream("./largeFile.txt", {
    encoding: "utf-8",
    highWaterMark: 64 * 1024 // 64 KB chunks
});

pausedReadableStream.on("readable", () => {
    let chunk;
    // on demand reading
    while (null !== (chunk = pausedReadableStream.read())) {
        console.log("----- New Chunk -----" + chunk.length, "bytes" + chunk.toString());
        // processing on that chunk 
        // checksum (validates yopur data integrity) , compression , encryption
        // 
        // 5 sec 
    }
});

pausedReadableStream.on("end", () => {
    console.log("---- No more data to read ----");
});
*/
// diffrence between paused and flowing mode
// 1. In flowing mode, data is read automatically and emitted as soon as it is available.
// 2. In paused mode, data is read only when explicitly requested using the read() method.
// 3. Flowing mode is suitable for scenarios where you want to process data as soon as it arrives, while paused mode is useful when you need more control over when and how much data to read.


// 3. Writable Stream

/*
const writableStream = fs.createWriteStream("./output.txt", {
    encoding: "utf-8",
    highWaterMark: 16 * 1024 // 16 KB chunks
});


writableStream.on("finish", () => {
    console.log("All data has been written to the file.");
});

writableStream.on("error", (err) => {
    console.error("Error writing data to the file:", err);
})

// 10day

writableStream.write("Hello, "); // 2 
writableStream.write("World!"); // 2
writableStream.end(); // signals that no more data will be written

*/


// 4. Pipe - Readable to Writable
/*
const readableStream = fs.createReadStream("./largeFile.txt",{
     encoding: "utf-8",
    highWaterMark: 64 * 1024 // 64 KB chunks
});

const writableStream = fs.createWriteStream("./output.txt", {
    encoding: "utf-8",
    highWaterMark: 64 * 1024 // 64 KB chunks
});

// piping the readable stream to writable stream 
readableStream.pipe(writableStream);
*/


// 5. Transform Stream - Compression using zlib
/*
const fs = require("node:fs");
const zlib = require("node:zlib");


const readableStream = fs.createReadStream("./largeFile.txt", {
    encoding: "utf-8",
    highWaterMark: 64 * 1024 // 64 KB chunks
});


const writableStream = fs.createWriteStream("./output.txt.gz", {
    encoding: "utf-8",
    highWaterMark: 16 * 1024 // 16 KB chunks
});


// gzip transform stream
const gzip = zlib.createGzip();



readableStream.pipe(gzip).pipe(writableStream);
*/