const {Transform} = require('stream');
const caesarCode = require('./caesar-code')

const transformStream = (shift, action) => {
    return new Transform({
      transform(data, encoding, callback) {
        const text = Buffer.from(data).toString();
        this.push(caesarCode(text, shift, action));
        callback();
      }
    });
  };

module.exports = transformStream;