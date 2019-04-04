let moment = require('moment')
let utils = require('./utils')
const spawn = require('cross-spawn')
var crypto = require('crypto')
module.exports = {
  gayhub(startDate, endDate, level = 4, multiplier = 3) {
    if (!utils.existsGit()) {
      console.log('\u001b[31mYou need to go to a git project root directory!\u001b[39m')
      return;
    }
    if (!startDate && !endDate) {
      //both has not value
      startDate = moment().subtract(1, 'Y').startOf('month').format('YYYYMMDD')
      endDate = moment().format('YYYYMMDD')
      gaygaygay(startDate, endDate, level, multiplier)
    } else if (startDate && !endDate) {
      //only startDate
      commit(0, startDate)
    }else if(startDate && !endDate){
      gaygaygay(startDate, endDate, level, multiplier)
    }
    push()
  }
}


function gaygaygay(startDate, endDate, level, multiplier) {
  utils.ensureGayHub()
  let commitDate = startDate
  //如果在结束时间之前
  while (moment(commitDate, 'YYYYMMDD').isBefore(moment(endDate, 'YYYYMMDD'))) {
    commitDate = moment(commitDate, 'YYYYMMDD').add(1, 'day').format('YYYYMMDD')
    if (multiplier === 1) {
      commit(level, commitDate)
    } else {
      for (let i = multiplier; i > 0; i--) {
        commit(level, commitDate)
      }
    }
  }
}

function commit(level, commitDate) {
  if (utils.randompercentum(100 - level * 10)) {
    let bas = crypto.createHash('md5').update(commitDate).digest('hex');
    utils.writeLine(bas)
    spawn.sync('git', ['add', '.gayhub'], {stdio: 'inherit'})
    console.log('\u001b[32mcommit '+bas+'\u001b[39m')
    spawn.sync('git', ['commit', '-m', '(:', '--date="' + moment(commitDate, 'YYYYMMDD').format('ddd, DD MMM YYYY HH:mm:ss ZZ') + '"'], {stdio: 'ignore'})
  }
}

function push() {
  spawn.sync('git', ['push', '-u', 'origin', 'master'], {stdio: 'inherit'})
  console.log('\n\u001b[32mCongratulations!!\u001b[39m')
}
