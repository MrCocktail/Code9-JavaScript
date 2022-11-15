let numberStr = "5 45 123 12"
let sum, tab = [];
number = numberStr.split(" ")
for (let i = 0; i < number.length; i++){
    let len = number[i].length
    if (len > 1) {
        sum = 0
        for (let x = 0; x < len; x++){
            sum += Number(number[i][x])
        }
        tab.push(sum)
    } else {
        tab.push(Number(number[i]))
    }
}

let prod = 1
for (let i = 0; i < tab.length; i++){
    prod *= tab[i]
}
//console.log(prod);