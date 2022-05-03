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

        describe('invalid characters in string', () => {
            it('number', () => {
                expect(() => findNearestVowels('aBc1ro')).toThrow('input can only contain a-z and A-Z characters');
                expect(() => findNearestVowels('3aBcrro')).toThrow('input can only contain a-z and A-Z characters');
                expect(() => findNearestVowels('waBcrro0')).toThrow('input can only contain a-z and A-Z characters');
            });

            it('special characters', () => {
                expect(() => findNearestVowels('~aBcwro')).toThrow('input can only contain a-z and A-Z characters');
                expect(() => findNearestVowels('aBcr%ro')).toThrow('input can only contain a-z and A-Z characters');
                expect(() => findNearestVowels('waBcrro|')).toThrow('input can only contain a-z and A-Z characters');
            });

            it('space', () => {
                expect(() => findNearestVowels(' aBcwro')).toThrow('input can only contain a-z and A-Z characters');
                expect(() => findNearestVowels('aBcr ro')).toThrow('input can only contain a-z and A-Z characters');
                expect(() => findNearestVowels('waBcrro ')).toThrow('input can only contain a-z and A-Z characters');
            });
        });
    });
});