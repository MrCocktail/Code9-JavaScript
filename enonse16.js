const DEBUG = false 
const log = (value) => DEBUG && console.log(value)
let alph = "abcdefghijklmnopqrstuvwxyz"
alph = alph.toUpperCase()
let encrypt =  ">3A >0A <1U <10K >1A <9J <0S <16U"
encrypt = encrypt.split(" ")
let decrypt = "", n = 0
for (let i = 0; i < encrypt.length; i++){
    if (encrypt[i][0] == ">"){
        if (encrypt[i].length == 4){
            let y = encrypt[i].substring(1,3)
            let idx = alph.indexOf(encrypt[i].at(-1))
            n = idx + parseInt(y)
        } else {
            let y = encrypt[i][1]
            let idx = alph.indexOf(encrypt[i].at(-1))
            n = idx + parseInt(y)
        }
        decrypt += alph[n]
    }
    else if (encrypt[i][0] == "<") {
        if (encrypt[i].length == 4){
            let y = encrypt[i].substring(1,3)
            let idx = alph.indexOf(encrypt[i].at(-1))
            n = idx - parseInt(y)
        } else {
            let y = encrypt[i][1]
            let idx = alph.indexOf(encrypt[i].at(-1))
            n = idx - parseInt(y)
        }
        decrypt += alph[n]
    }
}
log(decrypt)