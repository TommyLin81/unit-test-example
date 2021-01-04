import { Calculator } from '.'

describe('test utils Calculator class', () => {
    let testCalculator = undefined

    beforeEach(()=> {
        // Setup
        testCalculator = new Calculator()
    })

    afterEach(()=> {
        // Teardown
        testCalculator = undefined
    })

    test('test add function', ()=> {
        // Exercise
        const unvefifyData = testCalculator.add(1,1)
        // verify
        expect(unvefifyData).toBe(2)
    })
    test('test minus function', ()=> {
        const unvefifyData = testCalculator.minus(2,1)
        expect(unvefifyData).toBe(1)
    })

    test('test times function', ()=> {
        const unvefifyData = testCalculator.times(10,10)
        expect(unvefifyData).toBe(100)
    })
    
    test('test divided function', ()=> {
        const unvefifyData = testCalculator.divided(100,50)
        expect(unvefifyData).toBe(2)
    })
})