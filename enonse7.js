const DEBUG = false
const log = (value) => DEBUG && console.log(value)
let str = "en"
let vowels = "aeiouy"
let new_str = ""
for (let i = 0; i < str.length; i++){
    vowels.includes(str[i]) ?  str = str.replace(str[i-1], "*") : {}
}
log(str)