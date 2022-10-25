//背压机制解决的问题

const fs = require('fs');

let rs = fs.createReadStream('test.txt',{
  highWaterMark: 4
})

let ws = fs.createWriteStream('test1.txt',{
  highWaterMark:1
})

let flag = true;// 判断缓存的状态

rs.on("data" , (chunk) => {
  flag = ws.write(chunk , () => {
    console.log('写完了')
  })

  //当没有空间的时候，就关闭阀门
  if( !flag ){
    rs.pause();
  }
})

//当有空间的时候，开启阀门
ws.on('drain' , () => {
  rs.resume();
})