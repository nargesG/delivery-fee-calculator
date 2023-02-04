import calculateDeliveryFee from "./calculateDeliveryFee";

const normalTime = '2023-01-23T19:18:56+02:00' // It is a Monday

// calculateDeliveryFee = (cartValue in euro, distance in meter, number in int, time in date)
describe('Fee Calculator', () => {
    test('cart value more than 100e delivery fee is free', () => {
        expect(calculateDeliveryFee(101, 1000, 2, normalTime)).toBe(0);
        expect(calculateDeliveryFee(101, 10000, 20000, normalTime)).toBe(0);
        expect(calculateDeliveryFee(9.5, 10000, 20000, normalTime)).not.toBe(0)
      });
    test('delivery fee is 15e at most', () => {
        expect(calculateDeliveryFee(10, 1000000, 2, normalTime)).toBe(1500);
        expect(calculateDeliveryFee(10,100,9, normalTime)).toBeLessThan(1500);
      });
    test('in the rush hour deliveryfee is * 1,2', () => {
        const normalTimeFee = calculateDeliveryFee(0, 0, 0, normalTime)
        const rushHour = '2023-01-27T17:06:28+02:00' // Friday 15~19
        const rushTimeFee = calculateDeliveryFee(0, 0, 0, rushHour)
        expect(rushTimeFee).toBe(normalTimeFee * 1.2)
    })
    test('if cart is empty delivery fee is not taken', () => {
      expect(calculateDeliveryFee(10, 0, 0, normalTime)).toBe(0);
    })
    
})