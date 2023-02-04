import getNumberFee from "./getNumberFee";
import moment from "moment";
import getDistanceFee from "./getDistanceFee";
import getCartFee from "./getCartFee";

const calculateDeliveryFee = (
    cartValue, 
    distance, 
    number, 
    time,
) => {
    let deliveryFee = 0;
    const cartValueInCents = cartValue * 100; 

    if (cartValueInCents >= 10000 || number === 0)
       return 0
    
    const cartFee = getCartFee(cartValueInCents)
    const distanceFee = getDistanceFee(distance)
    const numberFee = getNumberFee(number)
    
    deliveryFee = distanceFee + numberFee + cartFee
    
    const day = moment(time).format('dddd')
    const hour = moment(time).format('k')
   
    if (day === 'Friday' && hour >= 15 && hour <= 19)
        deliveryFee = deliveryFee * 1.2

    if (deliveryFee > 1500) 
        deliveryFee = 1500  

    return Math.round(deliveryFee)
}

export default calculateDeliveryFee
