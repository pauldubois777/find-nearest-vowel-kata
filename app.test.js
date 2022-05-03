const findNearestVowels = require('./app');

describe('findNearestVowels', () => {
    it('returns undefined', () => {
        const result = findNearestVowels();

        expect(result).toBeUndefined();
    });
});