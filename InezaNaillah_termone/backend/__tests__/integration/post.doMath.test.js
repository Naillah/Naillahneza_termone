const server = require('../../server');
const supertest = require('supertest');

const app = server;

describe('tests for doMath', () => {
    it('should return 500 status code', async () => {
        const result = await supertest(app).post('/api/v1/doMath').send({ operation: '/', operand1: 3, operand2: 0 });
        expect(result.status).toBe(500);
    })

    it('should return 500 status code when operation is not known', async () => {
        const result = await supertest(app).post('/api/v1/doMath').send({ operation: '<>',operand1: 3, operand2: 56 });
        expect(result.status).toBe(500);
    })

    it('should return a response with a correct product', async () => {
        const result = await supertest(app).post('/api/v1/doMath').send({ operation: '*', operand1: 10, operand2: 5 });
        expect(result.body.calcResponse).toBe(50);
        expect(result.status).toBe(200);
    })

    it('should return 500 status code', async () => {
        const result = await supertest(app).post('/api/v1/doMath').send({ operation: '+', operand1: 3, operand2: 5 });
        expect(result.body.calcResponse).toBe(8);
        expect(result.status).toBe(200);
    })
})