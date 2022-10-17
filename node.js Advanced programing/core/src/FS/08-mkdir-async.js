const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// 递归实现

function mkDir(pathName, callBack) {
  let parts = pathName.split('/');
  let index = 1;

  function next() {
    if (index > parts.length) return callBack && callBack();

    let current = parts.slice(0, index++).join('/');

    fs.access(current, (err) => {
      if (err) {
        fs.mkdir(current, next);
      } else {
        next();
      }
    })


  }
  next();
}

mkDir('c/d/e/g', () => {
  console.log('创建成功');
})

// 对原生的异步文件方法进行包装
const access = promisify(fs.access);
const mkdir = promisify(fs.mkdir);

async function myMkdir(dirPath, cb) {
  let parts = dirPath.split('/');

  for (let i = 1; i <= parts.length; i++) {
    let current = parts.slice(0, i).join('/');
    try {
      await access(current);
    } catch (err) {
      await mkdir(current);
    }
  }
  cb && cb();
}

myMkdir('d/e/f', () => {
  console.log('创建成功');
})