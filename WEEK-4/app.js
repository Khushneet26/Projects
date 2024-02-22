//Readibility Issue: (90%Solved)
//No Centralized error handler
//Method-1

const fs = require("fs");
const {readFileP} = require("./promise");

readFileP("file1.txt")
    .then( (fileTwo) => readFileP(fileTwo) )
    .then ( (fileThree) => readFileP(fileThree))
    .then ( (fileFour) => readFileP(fileFour))
    .then( content => console.log(content))
    .catch( (err) => console.log(err)); 

//Method-2 

const fs = require("fs/promises");
//const {readfileP}= require("./promise");
//const {promisify} = require ("util");
//const readFileP = promisify(fs.readFile);


async function readFiles () {
const fileTwo = await readFileP("file1.txt")
const fileThree = await readFileP(fileTwo) 
const fileFour = await readFileP(fileThree)
const content = await console.log(fileFour)
console.log(content);
}
readFiles();
console.log("SENDING EMAIL...")
//Promise: 
//1.  Readability Issue-- Nested Callback issues
//2. No centralized error handler
const fs = require("fs");
fs.readFile("file1.txt", (err, fileTwo) => {
    if (err) return console.log(err);
    fs.readFile(fileTwoGlobal, (err, fileThree) => {
        if (err) return console.log (err);
        fs.readFile (fileThree, (err, fileFour) => {
        if (err) return console.log(err);
        fs.readFile(fileFour, "utf8", (err, res) => {
            if (err) return console.log(err);
            console.log(res);
        });
    });
});
});

        
 