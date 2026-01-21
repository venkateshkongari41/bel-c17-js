// --------------- STREAMS ------------------

// Streams are used to read or write data in a continuous manner.
// They are especially useful for handling large files or data sources, as they allow you to process data piece by piece without loading the entire content into memory at once.



// BEHIND THE STREAMS : Buffer 
// TYpes of streams: Readable, Writable, Duplex, Transform


//  1. Readable Stream
const fs = require("node:fs");


const readableStream = fs.createReadStream("./largeFile.txt", {
    encoding: "utf-8",
    highWaterMark: 64 * 1024 // 64 KB chunks
})


readableStream.on("data", (kb64Kbchunk) => {
    console.log("----- New Chunk -----" + kb64Kbchunk.length, "bytes" + kb64Kbchunk.toString());
})


readableStream.on("end", () => {
    console.log("---- No more data to read ----");
})