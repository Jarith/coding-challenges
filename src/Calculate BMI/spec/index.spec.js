import { bmi } from '../index';

describe('bmi', () => {
    it('returns "Underweight" if bmi <= 18.5', () => {
        expect(bmi(100, 10)).toBe('Underweight');
        expect(bmi(1850, 10)).toBe('Underweight');
    });

    it('returns "Normal" if bmi <= 25 and bim > 18.5', () => {
        expect(bmi(1860, 10)).toBe('Normal');
        expect(bmi(2500, 10)).toBe('Normal');
    });

    it('returns "Overweight" if bmi <= 30 and bim > 25', () => {
        expect(bmi(2550, 10)).toBe('Overweight');
        expect(bmi(3000, 10)).toBe('Overweight');
    });

    it('returns "Obese" if bmi > 30', () => {
        expect(bmi(3010, 10)).toBe('Obese');
    });

    describe('returns "Not calculated" if', () => {
        it('weight <= 0', () => {
            expect(bmi(0, 10)).toBe('Not calculated');
            expect(bmi(-1, 10)).toBe('Not calculated');
        });

        it('height <= 0', () => {
            expect(bmi(100, 0)).toBe('Not calculated');
            expect(bmi(100, -1)).toBe('Not calculated');
        });

        it('weight <= 0 and height <= 0', () => {
            expect(bmi(0, 0)).toBe('Not calculated');
            expect(bmi(0, -1)).toBe('Not calculated');
            expect(bmi(-1, 0)).toBe('Not calculated');
            expect(bmi(-1, -1)).toBe('Not calculated');
        });
    });
});