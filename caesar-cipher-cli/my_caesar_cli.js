const {checkArguments, checkPaths} = require('./src/checkers');
const transformStream = require('./src/transform-stream');

const fs = require('fs');
const minimist = require('minimist');
const path = require('path');
const {pipeline} = require('stream');

const args = minimist(process.argv.slice(2), {
    alias: { s: 'shift',
             i: 'input',
             o: 'output',
             a: 'action'}
});
let {action, shift, input, output} = args;

input = input ? path.resolve(__dirname, String(input)) : null;
output = output ? path.resolve(__dirname, String(output)) : null;

checkArguments(args);
checkPaths({input, output});

const readStream = input ? fs.createReadStream(input, 'utf8') : process.stdin;
const writeStream = output ? fs.createWriteStream(output, {flags: 'a+'}) : process.stdout;

pipeline(
    readStream,
    transformStream(shift, action),
    writeStream,
    (err) => {
      if (err) {
        console.error('Fail.', err);
      } else {
        console.log('Success!');
      }
    }
);