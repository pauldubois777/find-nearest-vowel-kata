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

        it('no vowels present', () => {
            expect(() => findNearestVowels('wBcrr')).toThrow('input must contain at least one vowel character: a, e, i, o, or u');
        })
    });

    describe('results', () => {
        it('all vowels', () => {
            let result = findNearestVowels('aeiou');
            expect(result).toEqual([0, 0, 0, 0, 0]);

            result = findNearestVowels('aeiouaeiouaeiou');
            expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

            result = findNearestVowels('aaaaaa');
            expect(result).toEqual([0, 0, 0, 0, 0, 0]);

            result = findNearestVowels('eeeeee');
            expect(result).toEqual([0, 0, 0, 0, 0, 0]);
        })

        it('single vowel', () => {
            let result = findNearestVowels('abcdf');
            expect(result).toEqual([0, 1, 2, 3, 4]);

            result = findNearestVowels('becdf');
            expect(result).toEqual([1, 0, 1, 2, 3]);
            
            result = findNearestVowels('bcidf');
            expect(result).toEqual([2, 1, 0, 1, 2]);

            result = findNearestVowels('bcdof');
            expect(result).toEqual([3, 2, 1, 0, 1]);
            
            result = findNearestVowels('bcdfu');
            expect(result).toEqual([4, 3, 2, 1, 0]);
        });

        it('multiple vowels', () => {
            let result = findNearestVowels('abcdefghi');
            expect(result).toEqual([0, 1, 2, 1, 0, 1, 2, 1, 0]);

            result = findNearestVowels('abcdxefghzi');
            expect(result).toEqual([0, 1, 2, 2, 1, 0, 1, 2, 2, 1, 0]);
        });
    })
});