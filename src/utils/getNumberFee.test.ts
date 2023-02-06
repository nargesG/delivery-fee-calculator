import getNumberFee from "./getNumberFee";

describe('Number Fee', () => {
    test('numer is less than 4 or equall  to 4 numerFee is 0', () => {
        expect(getNumberFee(3)).toBe(0);
    });
    test('number is moer than 4 is not 0',() => {
        expect(getNumberFee(10)).not.toBe(0);
        expect(getNumberFee(10)).toBe(300);
        expect(getNumberFee(13)).toBe(570);
    });
})
