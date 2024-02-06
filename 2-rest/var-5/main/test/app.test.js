const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test post /employees', () => {
  
    test('If the request body is missing any of the keys a code of 400 and body {"message": "employee should have all keys"}', (done) => {
        request(app).post('/employees')
            .send({})
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('employee should have all keys')
                done()
            })
    })

    test('If the value for department is not one of ACCOUNTING, SALES, HR the server returns a code of 400 and body {"message": "invalid department"}', (done) => {
        request(app).post('/employees')
            .send({
                name: 'new employee',
                department: 'ENGINEERING',
                salary: 1100
            })
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('invalid department')
                done()
            })
    })


    test('If the salary is not a number the server responds with a 400 code and the body {"message": "salary must be a number"}', (done) => {
        request(app).post('/employees')
        .send({
            name: 'new employee',
            department: 'HR',
            salary: 'some salary'
        })
        .expect(400)
        .then(res => {
            expect(JSON.parse(res.text).message).toBe('salary must be a number')
            done()
        })
    })

    test('If the salary is a number less than 1000 the server respons with a 400 code and the body {"message": "salary cannot be below minimum"}', (done) => {
        request(app).post('/employees')
            .send({
                name: 'new employee',
                department: 'HR',
                salary: 900
            })
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('salary cannot be below minimum')
                done()
            })
    })

    test('If correct data is supplied the employee is added and the added record is returned in the body with a status code of 201', (done) => {
        request(app).post('/employees')
            .send({
                name: 'new employee',
                department: 'HR',
                salary: 1100
            })            
            .expect(201)
            .then(res => {
                expect(JSON.parse(res.text)).toEqual({ id: 11, name: 'new employee',  department: 'HR', salary: 1100 })
                done()
            })
    })
})



