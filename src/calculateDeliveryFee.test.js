import calculateDeliveryFee from "./calculateDeliveryFee";

// calculateDeliveryFee = (cartValue in cents, distance in meter, number in int)
describe('Fee Calculator', () => {
    test('cart value more than 100e delivery fee is free', () => {
        expect(calculateDeliveryFee(10001, 1000, 2)).toBe(0);
        expect(calculateDeliveryFee(10001, 10000, 20000)).toBe(0);
        expect(calculateDeliveryFee(9999, 10000, 20000)).not.toBe(0)
      });
    test('delivery fee is 15e at most', () => {
        expect(calculateDeliveryFee(1000, 1000000, 2)).toBe(1500);
        expect(calculateDeliveryFee(1000,100,9)).toBeLessThan(1500);
      });
    
})