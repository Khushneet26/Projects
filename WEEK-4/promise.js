const fs = require("fs");

const readFileP = ( file ) => {
    return new Promise( (res, rej) => {
        fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                rej(err);
            } else {
                resolve (data);
            }
        });
    });
};
const promiseObj = readFileP(file1.txt)
   .promiseObj.then ( (data) => console.log(data))
   .promiseObj.catch( (err) => console.log(err));

