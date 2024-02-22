//Part-1

const { pipeline} = require("stream");
const process = require("process");


const console = {
    log: (msg) => process.stdout.write(msg),
};

const rs = process.stdin;
const ws = process.stdout;
pipelin(
    rs,
    ws,
    (err) => { if (err) console.log(err)}
)
rs
.on("error", (err) => console.log(err) )
.pipe(ws);

//Part-2 

const { pipeline, Transform} = require("stream");
const process = require("process");

const rs = process.stdin;
const ts = new Transform ( {
    transform(Chunk, encoding, callback) { 
        const upperString = chunk.tostring().toUpperCase
    }
});
const ws = process.stdout;
rs.pipe(ts).pipe(ws);



