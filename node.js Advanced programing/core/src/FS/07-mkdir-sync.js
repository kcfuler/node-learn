const fs = require('fs');
const path = require('path');

/**
 * 01 将来调用时需要接受类似于 a/b/c ， 这样的路径， 它们之间是使用 / 去进行链接
 * 02 利用 / 分隔符将路径进行拆分，将每一项放入一个数组中进行管理 ['a', 'b' ,'c'];
 * 04 对上述的数组进行遍历，我们需要拿到每一项，然后与前一项进行拼接 /
 * 04 判断对当前拼接完毕的目录是否具有可操作的权限，如果有，则存在，否则需要创建
*/


// 通过同步api 来模拟递归操作
function makeDirSync(dirPath) {
  let items = dirPath.split(path.sep);
  // console.log(path.sep); // 不同操作系统的分隔符可能有区别
  for (let i = 1; i <= items.length; i++) {
    let dir = items.slice(0, i).join(path.sep);
    try {
      fs.accessSync(dir);
    } catch (err) {
      fs.mkdirSync(dir);
    }
  }
}

makeDirSync('a\\b\\c'); // 转义