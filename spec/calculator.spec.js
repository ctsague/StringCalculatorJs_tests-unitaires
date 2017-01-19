var StringCalculator = require('../lib/calculator').StringCalculator;

describe("StringCalculator execution", function () {

    it("should return 0 when input is null", function () {
        expect(StringCalculator(null)).toBe(0);
    });

});