const fs = require('fs');
const path = require('path');

const checkArguments = (args) => {
    const {action, shift} = args;

    if (Array.isArray(action)) {
        console.error('Please don\`t duplicate action value. Use one of options: -a or --action');
        process.exit(9);
    }

    if (Array.isArray(shift)) {
        console.error('Please don\`t duplicate shift value. Use one of options: -s or --shift');
        process.exit(9);
    }
    
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

    if (Array.isArray(input)) {
        console.error('Please don\`t duplicate input value. Use one of options: -i or --input');
        process.exit(9);
    }

    if (input) {
      input = path.resolve(__dirname, input);
      fs.access(input, fs.constants.F_OK | fs.constants.R_OK, (err) => {
        if (err) {
            console.error('Input file doesn\'t exist. Please make sure you have specified the correct path and have read permission for the file.');
            process.exit(9);
        }
      });
    }

    if (Array.isArray(output)) {
        console.error('Please don\`t duplicate output value. Use one of options: -o or --output');
        process.exit(9);
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