const HomePage = require("./HomePage")
// @ponicode
describe("onTorchIDPress", () => {
    let inst

    beforeEach(() => {
        inst = new HomePage.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onTorchIDPress()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onTorchButtonPress", () => {
    let inst

    beforeEach(() => {
        inst = new HomePage.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onTorchButtonPress()
        }
    
        expect(callFunction).not.toThrow()
    })
})
