const DEBUG = false 
const log = (value) => DEBUG && console.log(value)
let res;
const divide = (a,b) => {
    res = (b/a)/2
    return res
}
log(divide(3,24))