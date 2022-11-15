let ip = prompt("Enter a IP adress:")
ip = ip.split(".")
ip = ip.join('')
let sum = 0
for (let i = 0; i < ip.length; i++) sum += parseInt(ip[i])
sum *= ip[0]