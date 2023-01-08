const names = require('./modules/mNames');
const altModules= require('./modules/6-altmodules')
const sayHi =require('./modules/utils')
console.log(names)

sayHi(names.myName2)
sayHi(names.myName3)
sayHi(altModules.singlePerson.name)