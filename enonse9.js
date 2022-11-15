const DEBUG = false
const log = (value) => DEBUG && console.log(value)
let a = 5, b = 20, total = 0
for (let i = a; i <= b; i++){
    i % 2 == 0 ? total += i : {}
}
log(total)