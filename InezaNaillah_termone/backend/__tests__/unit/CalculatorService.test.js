const CalculatorService = require('../../services/CalculatorService');

describe('calculator service tests', () => {
    it('should throw an error when operation is / and second operand is 0', () => {
        const result = CalculatorService.doMath(5, 0, '/');

        expect(result).toThrow(Error);
        expect(result).toThrow("Cannot divide by 0")
    });

    it('should throw an error when operation is not known', () => {
        const result = CalculatorService.doMath(4, 4, '>');

        expect(result).toThrow(Error);
        expect(result).toThrow("Unknown operation");
    });

    it('should return the correct sum', () => {
        const result = CalculatorService.doMath(5, 10, '+');
        expect(result).toBe(15);
    })

    it('should return the correct product', () => {
        const result = CalculatorService.doMath(5, 10, '*');

        expect(result).toBe(50);
    })
})