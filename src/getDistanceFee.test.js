import getDistanceFee from "./getDistanceFee";

describe('Ditance Fee', () => {
    test('For distance < 1000m distance fee will be 2€', () => {
        expect(getDistanceFee(900)).toBe(200)
    })
})