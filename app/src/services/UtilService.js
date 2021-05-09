export const utilService ={
    findMatchLowerCase,findStrNumber
}

function findMatchLowerCase(key, value) {
    key = key.toLowerCase()
    value = value.toLowerCase()
    return key.includes(value)
}
function findStrNumber(str){
    const res = str.match(/\d+/)
    return +res
}