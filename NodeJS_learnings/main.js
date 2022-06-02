//modules
const myName = require('./1-name')
const sayHi = require('./2-utils')
const alternate = require('./3-alternative-way')
require('./4-mind-grenade')


sayHi(myName.john)
sayHi(myName.peter)
// sayHi(peter)
console.log(alternate)