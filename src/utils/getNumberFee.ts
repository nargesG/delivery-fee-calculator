const getNumberFee = (number: number): number => {
    if (number <= 4) return 0
    if (number <= 12) return (number - 4) * 50
    return (number - 4) * 50 + 120
}

export default getNumberFee