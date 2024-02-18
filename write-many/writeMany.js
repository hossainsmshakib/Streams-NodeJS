const fs = require("node:fs/promises");

// Execution time: 51.487s
// CPU usage: 39% (7th gen i7)

(async () => {
    console.time("writeMany");
    const filehandle = await fs.open("./write-many/test.txt", "w");

    for (let i = 0; i < 1000000; i++) {
        await filehandle.write(`test ${i}\n`);
    }
    console.timeEnd("writeMany");
})();