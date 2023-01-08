const os = require('os')

//info About current user 

const  user = os.userInfo()
console.log(user)

console.log(`the following uptime ${os.uptime()}`)
const names = require('./modules/mNames');
const altModules= require('./modules/6-altmodules')
const sayHi =require('./modules/utils')
console.log(names)


const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs)