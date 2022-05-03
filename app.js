// Valid input is an empty string or a string with only characters A-Z a-z and at least one vowel.
// Any validation errors will throw an exception with explaination.

const findNearestVowels = input => {
    const VOWELS = 'aeiou';

    // Validate is a string
    if (typeof input !== 'string') {
        throw Error('input must be typeof string');
    }

    // Validate not empty
    if (input.trim() === '') {
        return [];
    }

    // Convert to lower case array of characters
    const inputArray = Array.from(input.toLocaleLowerCase());

    // Get vowels and check if string only contains characters a-z
    const vowelPositions = []
    inputArray.forEach((char, idx) => {
        if (char.localeCompare('a') < 0 || char.localeCompare('z') > 0) {
            throw Error('input can only contain a-z and A-Z characters');
        }

        if (VOWELS.indexOf(char) > -1) {
            vowelPositions.push(idx);
        }
    });

    if (vowelPositions.length === 0) {
        throw Error('input must contain at least one vowel character: a, e, i, o, or u')
    }
}

module.exports = findNearestVowels;