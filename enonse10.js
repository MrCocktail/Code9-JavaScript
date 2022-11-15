const DEBUG = false
const log = (value) => DEBUG && console.log(value)
class Window {
    localStorage = {
        blast : "web-insecure;34829sjdfnsj32984madsdkj"
    }

    getItem(){
        let n = this.localStorage.blast.split(";")
        n.shift()
        return n.join()
    }
}
const window = new Window()
log(window.getItem())