const DEBUG = false
const log = (value) => DEBUG && console.log(value)
const smallest = (a,b) => {
    if(a <= b) return a
    else return b
}
log(smallest(3,4))