
class CalculatorService {
   static doMath(operand1, operand2, operation) {
    if(operation === '/' && operand2 == 0) throw new Error('Cannot divide by 0');
    switch(operation) {
        case '*':
            return operand1 * operand2;
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '**':
            return Math.pow(operand1, operand2);
        case 'log':
            return operand1 * Math.log10(operand2);
        case 'ln':
            return operand1 * Math.log(operand2);
        case '/':
            return operand1 / operand2;
        default:
            throw new Error('Unknown operation');
    }
   }
}

module.exports = CalculatorService;