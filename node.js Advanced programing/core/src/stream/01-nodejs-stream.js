const fs = require('fs');

//创建读写流
let rs = fs.createReadStream('test.txt');
let ws = fs.createWriteStream('test1.txt');

rs.pipe(ws); // 通过管道传输流数据