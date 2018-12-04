let fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'input.txt');

let dataBoxIds = fs.readFileSync(filePath, {encoding: 'utf-8'});
let boxIds = dataBoxIds.split('\n');
let twoDuplicates = 0;
let threeDuplicates = 0;

for (i = 0; i < boxIds.length; i++) {
  const strArr = boxIds[i].split("").sort().join("").match(/(.)\1+/g);

  if (strArr != null) {
    let has2 = strArr.some(function(elem) {
      return elem.length == 2;
    });
    let has3 = strArr.some(function(elem) {
      return elem.length == 3;
    });
    if (has2) {
      twoDuplicates += 1;
      console.log("Two Duplicates: " + twoDuplicates);
    };
    if (has3) {
      threeDuplicates += 1;
      console.log("Three Duplicates: " + threeDuplicates);
    };
  }
}

module.exports = checksum;