import getCartFee from "./getCartFee";

describe('Cart Fee', () => {
    test('if cart value is at least 10€ cart fee is free', () => 
    {
        expect(getCartFee(1000)).toBe(0);
    })

    test('if cart value is less then 10€ cart fee is 10 - cart value', () => 
    {   
        expect(getCartFee(900)).toBe(100);
    })
})