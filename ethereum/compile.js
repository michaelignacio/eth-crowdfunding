const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// use path's resolve function to get cross-platform directory name
const buildPath = path.resolve(__dirname, 'build');
// remove all files in dir
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}