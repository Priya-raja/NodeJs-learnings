//modules
const myName = require('./1-name')
const sayHi = require('./2-utils')
const alternate = require('./3-alternative-way')


sayHi(myName.john)
sayHi(myName.peter)
// sayHi(peter)
console.log(alternate)