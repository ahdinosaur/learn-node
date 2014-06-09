var fs = require('fs')

var stuff = fs.readFileSync(__dirname + '/stuff.txt').toString()

var result = []

stuff.split('\n').forEach(function (line) {
  if (line.charAt(0) === ' ') {
    console.log(line)
  }

  result.push(line)
});

console.log("result", result)