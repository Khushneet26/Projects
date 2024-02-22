const mathHelpers = require("./mathHelpers");
const {argv} = require("process");
mathHelpers.distance()

//A function called processInput receive userInput
const [x1,y1,x2,y2] = process.argv;

const processInput = (userInput) => {

}
processInput();

//Create a folder called datapoints
fs.mkdir("dataPoints", (err)) => {
    if (err) return console.log(err);
    //Create a file called points.txt in datapoints folder
    fs.writefile("dataPoints/points.txt", userInput)
    if (err) return console.log(err);
    console.log("Content saved");
    const distanceCalculation = distance(
        Number(x1),
        Number(y1),
        Number(x2),
        Number(y2),
    );
    const distanceMsg = "points (${x1}, ${y1}, ${x2}, ${y2} is ${distanceCalculation}";
    fs.appendFile("dataPoints/points.txt")
}

//and write userInput into points.txt
//point a content saved
//add the distance message calculation to the end of our 