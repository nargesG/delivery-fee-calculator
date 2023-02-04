import getCartFee from "./getCartFee";

describe('Cart Fee', () => {
    test('if cart value is at least 10€ cart fee is free', () => 
    {
        expect(getCartFee(1000)).toBe(0);
    })
})