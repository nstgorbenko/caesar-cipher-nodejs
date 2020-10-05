const readStream = require('./src/read-stream');
const transformStream = require('./src/transform-stream');
const writeStream = require('./src/write-stream');

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
input = input ? path.resolve(__dirname, input) : null;
output = output ? path.resolve(__dirname, output) : null;

if (typeof action === 'undefined' || typeof shift === 'undefined') {
  console.error('Please enter desired action and shift values. Then try again.');
  process.exit(9);
} else {
  pipeline(
      readStream(input),
      transformStream(shift, action),
      writeStream(output),
      (err) => {
        if (err) {
          console.error('Fail.', err);
        } else {
          console.log('Success!');
        }
      }
  );
}