const fs = require('fs');
const path = require('path');

const checkArguments = (args) => {
    const {action, shift} = args;
    
    if (action !== 'encode' && action !== 'decode') {
      console.error('Please enter desired action. It must be encode or decode. Then try again.');
      process.exit(9);
    }
  
    if (typeof shift !== 'number' || !shift || isNaN(shift)) {
      console.error('Please enter valid shift value. It must be integer. Then try again.');
      process.exit(9);
    }
  
    if (!shift) {
      console.error('Please enter valid shift value. It must be integer. Then try again.');
      process.exit(9);
    }
};
  
const checkPaths = (paths) => {
    let {input, output} = paths;
    
    if (input) {
      input = path.resolve(__dirname, input);
      fs.access(input, fs.constants.F_OK | fs.constants.R_OK, (err) => {
        if (err) {
          console.error('Input file doesn\'t exist. Please make sure you have specified the correct path and have read permission for the file.');
          process.exit(9);
        }
      });
    }
  
    if (output) {
      output = path.resolve(__dirname, output)
      fs.access(output, fs.constants.F_OK | fs.constants.W_OK, (err) => {
        if (err) {
          console.error('Output file doesn\'t exist. Please make sure you have specified the correct path and have read permission for the file.');
          process.exit(9);
        }
      });
    }
};

module.exports = {checkArguments, checkPaths};