var fs = require('fs');

var data;

try {
    data = fs.readFileSync('./fileForRead.txt','utf8');
    console.log(data);
} catch (error) {
    console.log("读取文件出错："+error);
}