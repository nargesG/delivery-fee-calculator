const getDistanceFee = (distance) => {
    if (distance > 1000) 
        return Math.ceil((distance - 1000) / 500) * 100 + 200
    return 200
}

export default getDistanceFee
    