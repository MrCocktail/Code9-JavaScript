let n = 20, a = 2, b = 3;
let w = [], x = [], y = [], z = []

for (let i = 1; i <= n; i ++){
    if (i % a == 0 && i % b != 0) {
        w.push(i)
    } else if (i % a != 0 && i % b == 0){
        x.push(i)
    } else if (i % a == 0 && i % b == 0) {
        y.push(i)
    } else if (i % a != 0 && i % b != 0){
        z.push(i)
    }
}

console.log(w.join(), `-> Total nonb: `, w.length);
console.log(x.join(), `-> Total nonb: `, x.length);
console.log(y.join(), `-> Total nonb: `, y.length);
console.log(z.join(), `-> Total nonb: `, z.length);