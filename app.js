// Valid input is an empty string or a string with only characters A-Z a-z and at least one vowel.
// Any validation errors will throw an exception with explaination.

const findNearestVowels = input => {
    // Validations

    // Not a string
    if (typeof input !== 'string') {
        throw Error('input must be typeof string');
    }

    // Empty string
    if (input.trim() === '') {
        return [];
    }
}

module.exports = findNearestVowels;