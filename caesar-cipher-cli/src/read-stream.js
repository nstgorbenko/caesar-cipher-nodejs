const fs = require('fs');

const readStream = (input) => {
    if (input !== null) {
  
        fs.promises.access(input, fs.constants.F_OK).catch(err => {
            console.error('Input file doesn\'t exist. Please make sure you have specified the correct path and have read permission for the file.');
            process.exit(9);
        });
        return fs.createReadStream(input, 'utf8');
    }
    return process.stdin;
};

module.exports = readStream;