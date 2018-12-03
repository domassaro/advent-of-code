let fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'input.txt');

let dataFrequency = fs.readFileSync(filePath, {encoding: 'utf-8'});
let lines = dataFrequency.split('\n');
let frequencyCalculation = 0;
let allFrequencies = new Set ([]);
let found = false;

while (!found) {
    for (let i = 0; i < lines.length; i++) {
        newFrequencyValue = parseInt(lines[i]);
        frequencyCalculation += newFrequencyValue;

        if (allFrequencies.has(frequencyCalculation)) {
            console.log("The first frequency my device reaches twice is " + frequencyCalculation);
            found = true;
            break;
        }
        allFrequencies.add(frequencyCalculation);    
    }

    if (found) {
        break;
    }
}