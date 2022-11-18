// personal method to get the smallest or the greater number in an array
const DEBUG = false
const log = (value) => DEBUG && console.log(value)
let num = [23,4,24,1,5,-1,0,-1.5]
let smallest = num[0]
let greater = num[0]
for (let i = 0; i < num.length; i++){
    smallest <= num[i] ? smallest = smallest : smallest = num[i]
    greater >= num[i] ? greater = greater : greater = num[i]
}
log(smallest)
log(greater)