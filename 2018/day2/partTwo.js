let fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'input.txt');

let dataBoxIds = fs.readFileSync(filePath, {encoding: 'utf-8'});
let boxIds = dataBoxIds.split('\n');

for (let i = 0; i < boxIds.length; i++) {
	for (let j = i + 1; j < boxIds.length; j++) {
		const charsI = [...boxIds[i]]
		const charsJ = [...boxIds[j]]

		let diff = charsI.reduce((a, c, i) => a + (c === charsJ[i] ? 0 : 1), 0)

		if (diff === 1) {
			let first = boxIds[i];
            let second = boxIds[j];

            console.log(first);
            console.log(second);
		}
	}
}

module.exports = checksumTwo;