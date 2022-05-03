const findNearestVowels = require('./app');

describe('findNearestVowels', () => {
    describe('validations', () => {
        it('empty string returns empty array', () => {
            const result = findNearestVowels('');
    
            expect(result).toEqual([]);
        });

        it('all spaces returns empty array', () => {
            const result = findNearestVowels('   ');
    
            expect(result).toEqual([]);
        });

        it('non string throws error', () => {
            expect(() => findNearestVowels(123)).toThrow('input must be typeof string');
        });

        it('null throws error', () => {
            expect(() => findNearestVowels(null)).toThrow('input must be typeof string');
        });

        it('undefined throws error', () => {
            expect(() => findNearestVowels(undefined)).toThrow('input must be typeof string');
        });
    });
});