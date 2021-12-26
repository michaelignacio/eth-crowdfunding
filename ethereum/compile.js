const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// use path's resolve function to get cross-platform directory name
const buildPath = path.resolve(__dirname, 'build');
// remove all files in dir
fs.removeSync(buildPath);

