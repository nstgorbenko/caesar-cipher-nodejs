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

    if (input) {
        if (!fs.existsSync(input)) {
            console.error('Input file doesn\'t exist. Please make sure you have specified the correct path and have read permission for the file.');
            process.exit(9);
        }

        if (fs.existsSync(input) && fs.lstatSync(input).isDirectory()) {
            console.error('Please enter path to input file, not directory.');
            process.exit(9);
        }

        fs.access(input, fs.constants.F_OK | fs.constants.R_OK, (err) => {
            if (err) {
                console.error('Input file doesn\'t exist. Please make sure you have specified the correct path and have read permission for the file.');
                process.exit(9);
            }
        });
    }
  
    if (output) {
        if (!fs.existsSync(output)) {
            console.error('Output file doesn\'t exist. Please make sure you have specified the correct path and have read permission for the file.');
            process.exit(9);
        }

        if (fs.existsSync(output) && fs.lstatSync(output).isDirectory()) {
            console.error('Please enter path to output file, not directory.');
            process.exit(9);
        }

        fs.access(output, fs.constants.F_OK | fs.constants.W_OK, (err) => {
            if (err) {
                console.error('Output file doesn\'t exist. Please make sure you have specified the correct path and have read permission for the file.');
                process.exit(9);
            }
        });
    }
};

module.exports = {checkArguments, checkPaths};