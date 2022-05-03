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
    });
});