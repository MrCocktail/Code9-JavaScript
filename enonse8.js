const DEBUG = false
const log = (value) => DEBUG && console.log(value)
let str = "   Lorem Ipsum  "
str = str.split(" ")
str = str.join("")
log(str)