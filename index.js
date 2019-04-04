#!/usr/bin/env node
var program = require('commander')
let {gayhub} = require('./src/gayhub')


program
    .version(require('./package').version)
    .arguments('[datastart] [dataend]')
    .option('-l ,--level <items>', 'level')
    .option('-m ,--multiplier <items>', 'multiplier')
    .action(function (x, b, c) {
      let dataStart = x;
      let dataend = b;
      if (dataStart) {
        if (dataStart.length !== 8) {
          console.log('\u001b[31mWrong time format, correct format YYYYMMDD!\u001b[39m')
          return;
        }
      }
      if (dataend) {
        if (dataend.length !== 8) {
          console.log('\u001b[31mWrong time format, correct format YYYYMMDD!\u001b[39m')
          return;
        }
      }
      let level = parseInt(c['level']) ? parseInt(c['level']) : 4;
      let multiplier = parseInt(c['multiplier']) ? parseInt(c['multiplier']) : 3;
      if (level > 10||level<0) {
        console.log('\u001b[31mLevel ranges from 0 to 9 \u001b[39m')
        return;
      }
      if (multiplier < 0) {
        multiplier = 1
      }
      gayhub(dataStart, dataend, level, multiplier)
    })
    .parse(process.argv)
