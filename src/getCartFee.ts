const getCartFee = (cartValue: number): number => {
    // Check if cartValue less than 10 euro
    if (cartValue < 1000) 
      return 1000 - cartValue
    
    return 0
}

export default getCartFee