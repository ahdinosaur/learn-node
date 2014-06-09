var fs = require('fs')

var stuff = fs.readFileSync(__dirname + '/stuff.txt')

console.log(stuff)