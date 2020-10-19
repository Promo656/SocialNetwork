export const required = (value: any) => {
    if (value) return undefined
    return "Field is required"
}

export const maxLength30 = (value: any) => {
    if (value.length > 30) return "Max length is  30 symbol"
    return undefined
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbol`
    return undefined
}