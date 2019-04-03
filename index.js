
var program = require('commander')
let {gayhub} = require('./src/gayhub')


program
    .version(require('./package').version)
    .arguments('[datastart] [dataend]')
    .option('-l ,--level <items>', 'level')
    .option('-m ,--multiplier <items>', 'multiplier')
    .action(function (x, b, c) {
      let dataStart = x
      let dataend = b
      let level = c['level']
      let multiplier = c['multiplier']
      gayhub(dataStart, dataend, level, multiplier)
    })
    .parse(process.argv)
