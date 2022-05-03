// Valid input is an empty string or a string with only characters A-Z a-z and at least one vowel.
// Any validation errors will throw an exception with explaination.

const findNearestVowels = input => {
    // Validate is a string
    if (typeof input !== 'string') {
        throw Error('input must be typeof string');
    }

    // Validate not empty
    if (input.trim() === '') {
        return [];
    }

    // Convert to lower case array of characters
    inputArray = Array.from(input.toLocaleLowerCase());

    // String only contains characters a-z
    inputArray.forEach(char => {
        if (char.localeCompare('a') < 0 || char.localeCompare('z') > 0) {
            throw Error('input can only contain a-z and A-Z characters');
        }
    });
}

module.exports = findNearestVowels;