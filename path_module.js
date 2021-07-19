//path module

const path = require('path')

//find seperater for this plotferm (os)
console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);