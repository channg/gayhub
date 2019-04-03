let moment = require('moment')
let utils = require('./utils')
const spawn = require('cross-spawn');
module.exports = {
  gayhub(startDate, endDate, level = 2, multiplier = 3) {
    // 没填任何时间
    if (!startDate && !endDate) {
      startDate = moment().subtract(1, 'Y').startOf('month').format('YYYYMMDD')
      endDate = moment().format('YYYYMMDD')
      gaygaygay(startDate, endDate, level, multiplier)
    }
  }
}


function gaygaygay(startDate, endDate, level, multiplier) {
  //确定文件存在
  utils.ensureGayHub()
  let commitDate = startDate
  //如果在结束时间之前
  while(moment(commitDate,'YYYYMMDD').isBefore(moment(endDate,'YYYYMMDD'))){
    commitDate = moment(commitDate,'YYYYMMDD').add(1, 'day').format('YYYYMMDD')
    if(multiplier ===1){
      commit(level,commitDate)
    }else{
      for(let i = multiplier;i>0;i--){
        commit(level,commitDate)
      }
    }
  }
}

function commit(level,commitDate){
  if(utils.randompercentum(100-level*10)){
    utils.writeLine(commitDate)
    spawn.sync('git',['add','.'], { stdio: 'inherit' })
    spawn.sync('git',['commit','-m','(:','--date="'+moment(commitDate,'YYYYMMDD').format('ddd, DD MMM YYYY HH:mm:ss ZZ')+'"'], { stdio: 'inherit' })
  }
}