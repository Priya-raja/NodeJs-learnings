const path = require('path')

const separate = path.sep;
console.log(separate)
const filepath = path.join('/content','test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'content','test.txt')
console.log(absolute)