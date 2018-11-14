const fs = require('fs')
const path = require('path')
//遍历文件目录及其子目录，把文件输出
const getfilesInDir = function(dir){
    var results = [path.resolve(dir)]
    var files = fs.readdirSync(dir,'utf-8')
    console.log(files)
    //判断是文件还是目录
    files.forEach(file=>{
        file=path.resolve(dir,file)
        const stats = fs.statSync(file)//获得文件信息
        console.log(stats)
        if(stats.isFile()) results.push(file)
        else results = results.concat(getfilesInDir(file))
    })
    return results
}
const files = getfilesInDir('./src')
console.log(files)
