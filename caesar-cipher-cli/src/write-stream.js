const fs = require('fs');

const writeStream = (output) => {
    if (output !== null) {
        return fs.createWriteStream(output, {flags: 'a+'});
    }
    return process.stdout;
};

module.exports = writeStream;