const DEBUG = false
const log = (value) => DEBUG && console.log(value)
let str = "//////China/ hidden -code text is in the middle- endpass ***Japan**"
str_split = str.split(" ")
let hidden_idx = str_split.indexOf("hidden")
let endpass_idx = str_split.indexOf("endpass")
str_split = str_split.slice(hidden_idx + 1, endpass_idx)
log(str_split.join(" "))