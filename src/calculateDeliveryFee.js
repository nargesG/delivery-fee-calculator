import getNumberFee from "./getNumberFee";
import moment from "moment";

const calculateDeliveryFee = (
    cartValue, 
    distance, 
    number, 
    time,
) => {
    let cartFee = 0
    let deliveryFee = 0;

    if (cartValue >= 10000)
        return 0
    
    if (cartValue < 1000) 
        cartFee = 1000 - cartValue
    
    let distanceFee = 200
    if (distance > 1000) 
        distanceFee = Math.ceil((distance - 1000) / 500) * 100 + 200
    
    const numberFee = getNumberFee(number)
    
    deliveryFee = distanceFee + numberFee + cartFee
    
    const day = moment(time).format('dddd')
    const hour = moment(time).format('k')
   
    if (day === 'Friday' && hour >= 15 && hour <= 19)
        deliveryFee = deliveryFee * 1.2

    if (deliveryFee > 1500) 
        deliveryFee = 1500    

    return deliveryFee
}

export default calculateDeliveryFee
