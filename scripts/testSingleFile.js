"use strict";

const argv = require('yargs').argv;
const exec = require('child_process').exec;
const colors = require('colors');

if (argv.file) {
  const path = argv.path ? `${argv.path}/**/` : '';
  let testPath = argv.testPath ? `${argv.testPath}/` : '';

  if (!testPath && path) {
    testPath = path;
  }

  const cmd = `node_modules/.bin/cross-env NODE_ENV=test node_modules/.bin/nyc --reporter=lcov --reporter=text -n src/**/${path}${argv.file}.js node_modules/.bin/mocha --recursive --reporter=nyan tests/**/${testPath}${argv.file}-test.js`;

  console.log(`Testing for single file ${argv.file}`.cyan);

  exec(cmd, function (error, stdout, stderr) {
    console.log('Testing complete'.green);
    console.log(`stdout: ${stdout}`);
    console.log(`${stderr}`);
    if (error) {
        console.log(`An Error has occured: ${error}`.red);
    }
  });
} else {
  console.error('No file specified. Please run with a file, ex: --file=SomePanel'.red);
}
