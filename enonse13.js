const DEBUG = false
const log = (value) => DEBUG && console.log(value)
let list = [ 0, 1, 2, 3, 4, 5]
let n = 3
let idx = list.indexOf(n)
let len = list.length
let len2 = list.length
let reverse = []
let x = 0

while (x < len2){
    let new_tab = []
    for (let i = 0; i < len; i++){
        new_tab.push(list.at(-1))
        list = list.slice(0, list.length -1)
    } 
    reverse.unshift(new_tab.at(-1))
    list = Object.values(new_tab)
    list.pop()
    len--
    x++
}

log(`Array reverse: ${reverse}.\nIndex of ${n} in the first table is: ${idx}\n
Index of ${n} in the new is: ${reverse.indexOf(n)}`)