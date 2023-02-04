const getNumberFee = (number: number): number => {
    let numberFee = 0
    if (number <= 4) 
        numberFee = 0
    else if (number <= 12) 
        numberFee = (number - 4) * 50
    else 
        numberFee = (number - 4) * 50 + 120
    
    return numberFee
}

export default getNumberFee