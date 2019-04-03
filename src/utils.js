let fse = require('fs-extra')
let fs = require('fs')
let Path = require('path')
module.exports = {
  existsGit(){
    return fs.existsSync(Path.resolve(process.cwd(),'.git'))
  },
  ensureGayHub(){
    fse.ensureFileSync(Path.resolve(process.cwd(),'.gayhub'))
  },
  randompercentum(count){
    let n = Math.round(Math.random()*100)
    return n < count
  },
  writeLine(data){
    fs.appendFileSync(Path.resolve(process.cwd(),'.gayhub'), data+'\n');
  }
}

