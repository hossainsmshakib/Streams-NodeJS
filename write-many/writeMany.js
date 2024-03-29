// Promise Version
// Execution time: 51.487s
// CPU usage: 39% (7th gen i7)

// const fs = require("node:fs/promises");

/* (async () => {
    console.time("writeMany");
    const filehandle = await fs.open("./write-many/test.txt", "w");

    for (let i = 0; i < 1000000; i++) {
        await filehandle.write(`test ${i}\n`);
    }
    console.timeEnd("writeMany");
})(); */



//Sync Version
// Execution time: 1.02ms
// CPU usage: 83% (7th gen i7)
/* 
const fs = require("node:fs");

(async () => {
    console.time("writeMany");
    fs.open("./write-many/test.txt", "w", (err, fd) => {
        for (let i = 0; i < 1000000; i++) {
            const buff = Buffer.from(` ${i}\n`);
            fs.writeSync(fd, buff);
        }
    });
    console.timeEnd("writeMany");
})(); */


// Streams Version
// Execution time: 888.741ms
// CPU usage: 91% (7th gen i7)
// Don't use it this way. It eats too much memeory.

const fs = require("node:fs/promises");

(async () => {
    console.time("writeMany");
    const filehandle = await fs.open("./write-many/test.txt", "w");

    const stream = filehandle.createWriteStream();

    for (let i = 0; i < 1000000; i++) {
        const buff = Buffer.from(` ${i}\n`, "utf-8");
        stream.write(buff);
    }
    console.timeEnd("writeMany");
})();