// Valid input is an empty string or a string with only characters A-Z a-z and at least one vowel.
// Any validation errors will throw an exception with explaination.
// Logic specification:  https://www.codewars.com/kata/6158805b7b10b80007ce2c72

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

        if (VOWELS.includes(char)) {
            vowelPositions.push(idx);
        }
    });

    // Check for no vowels
    if (vowelPositions.length === 0) {
        throw Error('input must contain at least one vowel character: a, e, i, o, or u')
    }

    // Determine result

    const result = Array(inputArray.length);
    inputArray.forEach((char, idx) => {
        // Set vowels to 0 distance
        if (vowelPositions.includes(idx)) {
            result[idx] = 0;
        }
    });

    return result;
}

module.exports = findNearestVowels;