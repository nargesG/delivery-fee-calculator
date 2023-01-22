import getNumberFee from "./getNumberFee";

const calculateDeliveryFee = (
    cartValue, 
    distance, 
    number, 
    // time,
) => {
    let cartFee = 0
    let deliveryFee = 0;
    // cartValue > 10000 => deliveryFee = 0
    if (cartValue >= 10000)
        return 0
    
    if (cartValue < 1000) 
        cartFee = 1000 - cartValue
    
    let distanceFee = 200
    if (distance > 1000) 
        distanceFee = Math.round(distance / 500 + 1) * 100 + 200
    
    const numberFee = getNumberFee(number)
    
    deliveryFee = distanceFee + numberFee + cartFee
    
    // time = Fri 15~19 => deliveryFee = deliveryFee * 1.2

    if (deliveryFee > 1500) 
        deliveryFee = 1500

    return deliveryFee
}

export default calculateDeliveryFee
