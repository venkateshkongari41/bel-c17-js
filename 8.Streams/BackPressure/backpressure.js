const fs = require("node:fs");

const readableStream = fs.createReadStream("./largeFile.txt",{
     encoding: "utf-8",
    highWaterMark: 16 * 1024 // 64 KB chunks
});

const writableStream = fs.createWriteStream("./output.txt", {
    encoding: "utf-8",
    highWaterMark: 64 * 1024 // 64 KB chunks
});


readableStream.on("data", (chunk) => {
    console.log("----- New Chunk -----" + chunk.length, "bytes");
    
    const canWrite = writableStream.write(chunk); // returns false if the internal buffer is full
    

    if (!canWrite) {
        // pause the readable stream if writable stream buffer is full
        console.log("----🚨 BACKPRESSURE Pausing readable stream ----");
        readableStream.pause();
    }
});


writableStream.on("drain", () => {
    console.log("---- Resuming readable stream ----");
    // resume the readable stream when writable stream is drained
    readableStream.resume();
})

readableStream.on("end", () => {
    console.log("---- No more data to read ----");
    writableStream.end(); // close the writable stream
});

readableStream.on("error", (err) => {
    console.error("Error in readable stream:", err);
});

writableStream.on("error", (err) => {
    console.error("Error in writable stream:", err);
});




// piping the readable stream to writable stream 
readableStream.pipe(writableStream);