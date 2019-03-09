//solc compiler  npm install --save solc@0.4.17
// different type of compil.js saves the output abi of contract in build saving time

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);
// writes A JSON FILE TO THE SPECIFIED FOLDER OF BOTH THE KEYS OF THE TWO contracts
//USE CONSOLE.LOG(OUTPUT);
for (let contract in output) {
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':','') + '.json'),
		output[contract]
	);
}
