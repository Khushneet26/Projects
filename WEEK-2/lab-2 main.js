const fs = require('fs');

const path = require('path');

const distance = require('./mathHelpers');


function processInput(userInput) {
    const folderPath = path.join(__dirname, 'dataPoints');

    
    fs.mkdir(folderPath, (err) => {
        if (err && err.code !== 'EEXIST') {
            console.error('Error creating folder:', err);
            return;
        }

        const filePath = path.join(folderPath, 'points.txt');

        fs.writeFile(filePath, userInput, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }

            console.log('Content saved');

            const coordinates = userInput.split(' ').map(Number);
            const x1 = coordinates[0];
            const y1 = coordinates[1];
            const x2 = coordinates[2];
            const y2 = coordinates[3];

            distance(x1, y1, x2, y2, (err, calculatedDistance) => {
                if (err) {
                    console.error('Error calculating distance:', err);
                    return;
                }

                const distanceMessage = ` The distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${calculatedDistance}\n`;

                fs.appendFile(filePath, distanceMessage, 'utf8', (err) => {
                    if (err) {
                        console.error('Error appending distance to file:', err);
                    } else {
                        console.log('Distance appended to file');
                    }
                });
            });
        });
    });
}

const userInput = process.argv.slice(2).join(' ');
processInput(userInput);

