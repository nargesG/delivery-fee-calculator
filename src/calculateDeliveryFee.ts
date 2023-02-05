import getNumberFee from "./getNumberFee";
import moment from "moment";
import getDistanceFee from "./getDistanceFee";
import getCartFee from "./getCartFee";

const calculateDeliveryFee = (
    cartValue: number, 
    distance: number, 
    number: number, 
    time: string,
): number => {
    let deliveryFee: number = 0;
    const cartValueInCents = cartValue * 100; 

    // Customer has to have at least one item in cart
    if (cartValueInCents >= 10000 || number === 0)
       return 0
    
    const cartFee: number = getCartFee(cartValueInCents)
    const distanceFee: number = getDistanceFee(distance)
    const numberFee: number = getNumberFee(number)
    const day: string = moment(time).format('dddd')
    const hour: number = parseInt(moment(time).format('k'))
    
    deliveryFee = distanceFee + numberFee + cartFee
   
    if (day === 'Friday' && hour >= 15 && hour <= 19)
        deliveryFee = deliveryFee * 1.2

    if (deliveryFee > 1500) 
        deliveryFee = 1500  

    return Math.round(deliveryFee)
}

export default calculateDeliveryFee
