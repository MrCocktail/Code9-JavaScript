const DEBUG = false
const log = (value) => DEBUG && console.log(value)
let str = "Ayibobo Ayiti"
let len = str.length
let new_str = ""
for (let i = 0; i < len; i++){
    new_str += str.at(-1)
    str = str.slice(0, str.length -1)
}
log(new_str);