/**
 * 需求：“拉钩教育” 写入指定的文件
 * 01 一次性写入
 * 02 分批写入
 * 对比： 分批写入对内存更友好
*/

const fs = require('fs');
let ws = fs.createWriteStream('test.txt' , {
  highWaterMark:3 // 需要做这个限制才能有drain事件
});

// 一次性操作
// let str = '拉钩';
// let testTxt = str.repeat(100000000);
// ws.write(testTxt); 

//使用drain事件来进行判断

let flag = true;
let str = '拉钩教育'.split('');
let idx = 0;

function executorWrite(){
  flag = true;
  if( idx !== str.length && flag){
    flag = ws.write(str[idx]);
    idx++;
  }
}

executorWrite()

ws.on('drain',() => {
  console.log('drain 执行啦');
  executorWrite();
})

