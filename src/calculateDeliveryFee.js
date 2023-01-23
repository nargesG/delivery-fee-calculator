import getNumberFee from "./getNumberFee";
import moment from "moment";
import getDistanceFee from "./getDistanceFee";

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
    
    const distanceFee = getDistanceFee(distance)
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
