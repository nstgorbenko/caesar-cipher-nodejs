const FirstLetterCode = {
    UPPERCASE: 65,
    LOWERCASE: 97,
};
const ALPHABET_LENGTH = 26;

const processTextWithCaesar = (text, shift, action) => {
    if (action === 'encode' && shift < 0) {
        shift *= -1;
        action = 'decode';
    }
    if (action === 'decode' && shift < 0) {
        shift *= -1;
        action = 'encode';
    }

    let result = '';
  
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        if (letter.match(/[a-z]/i)) {
            const letterCode = letter.charCodeAt();
            const isUpperCase = letter.toUpperCase() === letter;
            const firstAlphabetLetterCode = isUpperCase ? FirstLetterCode.UPPERCASE : FirstLetterCode.LOWERCASE;

            if (action === 'encode') {
              letter = String.fromCodePoint(((letterCode + shift - firstAlphabetLetterCode) % ALPHABET_LENGTH) + firstAlphabetLetterCode);
            } else {
              const positiveShift = ALPHABET_LENGTH - (shift % ALPHABET_LENGTH);
              letter = String.fromCodePoint(((letterCode + positiveShift - firstAlphabetLetterCode) % ALPHABET_LENGTH) + firstAlphabetLetterCode);
            }
        }

      result += letter;
    }

    return result;
};

module.exports = processTextWithCaesar;