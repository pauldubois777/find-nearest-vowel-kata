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

    // Check for max length
    if (inputArray.length > 100) {
        throw Error('input cannot exceed 100 characters in length');
    }

    // Check for no vowels
    if (vowelPositions.length === 0) {
        throw Error('input must contain at least one vowel character: a, e, i, o, or u')
    }

    // Determine result

    // All vowels
    if (inputArray.length === vowelPositions.length) {
        // Every vowel is 0 distance from self
        return Array(inputArray.length).fill(0);
    }

    // Single vowel
    if (vowelPositions.length === 1) {
        const singleVowelIdx = vowelPositions[0];

        // Every non-vowel is its positive distance from the vowel
        return inputArray.map((_, idx) => Math.abs(idx - singleVowelIdx));
    }

    // More than one vowel

    const firstVowelIdx = vowelPositions[0];
    const lastVowelIdx = vowelPositions[vowelPositions.lenght - 1];
    const reversedVowelPositions = [...vowelPositions].reverse();

    const result = inputArray.map((char, idx) => {
        // Is char a vowel?
        if (VOWELS.includes(char)) {
            return 0; // Vowels are 0 distance from themselves
        }

        // char idx less than first vowel index
        if (idx < firstVowelIdx) {
            // Distance is to the vowel
            return firstVowelIdx - idx;
        }

        // char idx greater than last vowel idx
        if (idx > lastVowelIdx) {
            // Distance is from the vowel`
            return idx - lastVowelIdx;
        }

        // char idx is between two vowels
        const distanceToVowelBefore = idx - reversedVowelPositions.find(vidx => vidx < idx);
        console.log('before', distanceToVowelBefore);
        const distanceToVowelAfter = vowelPositions.find(vidx => vidx > idx) - idx;
        console.log('after', distanceToVowelAfter);

        return distanceToVowelAfter < distanceToVowelBefore ? distanceToVowelAfter : distanceToVowelBefore;

    });

    return result;
}

module.exports = findNearestVowels;