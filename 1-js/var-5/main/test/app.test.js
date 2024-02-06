const { decorate, SomeType } = require('./../app')

describe('Test decorate function', () => {
    test('first input should be an object type (function)', (done) => {
        expect(() => {
            decorate('a', 'printMe', () => {})
        }).toThrow('First parameter should be an object type')
        done()
    })

    test('second input should be a string', (done) => {
        expect(() => {
            decorate(SomeType, 5, () => {})
        }).toThrow('Second parameter should be a string')
        done()
    })

    test('third input should be a function', (done) => {
        expect(() => {
            decorate(SomeType, 'printMe', 4)
        }).toThrow('Third parameter should be a function')
        done()
    })

    test('extension method exists on decorated type', (done) => {
        const DecoratedType = decorate(SomeType, 'printMe', () => {
            return `i am ${this.name}`
        })
        expect(DecoratedType.prototype).toHaveProperty('printMe')
        done()
    })

    test('extension method works correctly', (done) => {
        const DecoratedType = decorate(SomeType, 'printMe', function () {
            return `i am ${this.name}`
        })
        const o = new DecoratedType('something')
        expect(o.printMe()).toEqual(`i am something`)
        done()
    })
})