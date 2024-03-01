/*
.. 12-15 MCQ's (50%) (1 ques from Streams)
.. Written(50%)

.. Major Topics:
.. Big picture : Runtime Environment, complilers, Interpreters

1. What does a runtime environment include?
Translator (Interpreter/compiler)
APIs (fiunctions that allow our programming language to interact with its environment)
--> fs.writeFile, os.cpus (Funcs for Node.js)
--> alert( ); ANY DOM methods (pop-up) (funcs for browser)
2. Is JavaScript a compiled or Interpreted language ?
--> JIT compilation
.. Asynchronous and Synchronous Code: 
- Conceptually, what is difference ?
--> Synchronous code blocks ebverything from running. To prove write a FOR Loop
Example:
for ( let i=0; i < 40_000_000; i++) {// do some math}
In Node.js we avoid synch as it is slow.
-How do we know if code is Asynch or Synchronous?
--> If a function receives a callback then it is asynch (TRUE / FALSE)
--> FALSE
--> [1,2,3], forEach( (num) => console.log(num))
console.log("Hi bcit");
--(1) Is the function I'am calling is imported from Node.js?
-->(2) Yes. does this func not have the word synch in it
-->(3) Yes, it is synchronous.
(Otherwise answer is may be we always have to look at the code)
- What is the problem with synchronous code
-->(1) Anything related to interacting with your hard drive
-->(2) Anything related to commununication over a network
-What are the alternatives to asynchronous code?
--> Multithreading: It costs a lot of memory (node doesn't relay on them)
.. Flavours Of Asynch: Callbacks VS promises
function sum(num1, num2, cb) {
    if (typeof num1 != "number" || typeof num2 !="number")
    cb("Please provide numbers !")
} else {
    cb( null,num1 + num2);
}
sum(5,4, (err,result) =>
if (err) return console.log(err);
console.log(resukt));
fs.readFile("hi.txt", "utf8", (err, result))
.. promises
- deferrred promise execution pattern
-converting promises from .then to await
..Core Node.js built-in modules
..Npm and working with third-party packages


-->Install anything in node.js it gets installed locally for that project only. If you want to use pngjs then you have need to install it in that directory.
*/

const fs = require("fs");

fs.readFileSync("hello.txt", "utf8", (err, data) =>{ 
    if (err) return console.log (err) ;
    console.log(data);
});

//create a function which is called
//writesquare
//writeSquare(2).... -> Square the number and write to 
//..... a file called square.txt

//.readSquare("Square.txt") -> read the file and and print
//console.log that says: "program finished"

const fs = require('fs');

function writeSquare(num, cb) {
    const squared = (num *num).toString();
    fs.writeFile("square.txt", squared,(err)=> {
        if (err) {
            cb(err);
        } else {
            cb(null);
        }
    });
}

function readSquare(filename, cb) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) return cb(err);
        cb(null, data.toString());
    });
}

// Example usage:
writeSquare(2, () => {
    if (err) return console.log(err);
    readSquare("square.txt", (err, data) => {
        if (err) return console.log(err);
    });
    console.log("program finished")
}); // This will write 4 to square.txt
readSquare('square.txt'); // This will read square.txt and print its content
console.log("program finished")


// 
const fs = require("fs/promises");

function writeSquare(num) {
    const squared = (num *num).toString();
    fs.writeFile("square.txt", squared,(err)=> {
        if (err) {
            cb(err);
        } else {
            cb(null);
        }
    });
}

function readSquare(filename) {
    fs.readFile(filename, 'utf8')      
}

// Example usage:
writeSquare(2, () => {
    if (err) return console.log(err);
    readSquare("square.txt", (err, data) => {
        if (err) return console.log(err);
    });
    console.log("program finished")
}); // This will write 4 to square.txt
readSquare('square.txt'); // This will read square.txt and print its content
console.log("program finished")