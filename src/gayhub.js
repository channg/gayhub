let moment = require('moment')
let utils = require('./utils')
console.log(moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ'))
module.exports = {
  gayhub(startDate, endDate, level, multiplier) {
    // 没填任何时间
    if (!startDate && !endDate) {
      startDate = moment().subtract(1, 'Y').startOf('month').format('YYYYMMDD')
      endDate = moment().format('YYYYMMDD')
      commit(startDate, endDate, level, multiplier)
    }
  }
}


function commit(startDate, endDate, level, multiplier) {
  utils.ensureGayHub()
}
