var StringCalculator = require('../lib/calculator').StringCalculator;

describe("StringCalculator execution", function () {

    it("should return 0 when input is null", function () {
        expect(StringCalculator(null)).toBe(0);
    });
     it("should return 0 when input is '' ", function () {
        expect(StringCalculator("")).toBe(0);
    });
     it("should return 0 when input is '0' ", function () {
        expect(StringCalculator("")).toBe(0);
    });

});