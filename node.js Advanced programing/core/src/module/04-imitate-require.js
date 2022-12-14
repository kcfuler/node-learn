const fs = require('fs');
const path = require('path');
const vm = require('vm');

function Module(id) {
  this.id = id;
  this.exports = {};
}

Module._resolveFilename = function (fileName) {
  //利用 Path 将 filename 转为绝对路径
  let absPath = path.resolve(__dirname, fileName);

  //判断当前路径对应的内容是否存在
  if (fs.existsSync(absPath)) {
    //如果条件成立则说明 absPath 对应的内容是存在的
    return absPath
  } else {
    // 文件定位
    let suffix = Object.keys(Module._extensions);
    // console.log(suffix);
    // 依次尝试
    for (let i = 0; i < suffix.length; i++) {
      let newPath = absPath + suffix[i];
      if (fs.existsSync(newPath)) {
        return newPath;
      }
    }
  }
  throw new Error(`${fileName} is not exists`);
}

Module._extensions = {
  ".js"(module) {
    // 读取
    let content = fs.readFileSync(module.id, "utf-8");
    // 包装
    content = Module.wrapper[0] + content + Module.wrapper[1];

    // VM, 得到我们想要的自执行函数
    let compileFn = vm.runInThisContext(content);

    // 准备参数的值
    let exports = module.exports;
    let dirname = path.dirname(module.id);
    let filename = module.id;

    //调用 , 这里是将eval 内部的 module.exports 执行， 把内容挂载到了我们现在的这个对象中。
    compileFn.call(exports, exports, myRequire, module, filename, dirname);
    console.log(compileFn)
  },
  ".json"(module) {
    let content = JSON.parse(fs.readFileSync(module.id, "utf-8"));
    module.exports = content;
  }
}

Module.wrapper = [
  "(function (exports , require, module , __filename , __dirname) {",
  "})"
]

Module._cache = {}

Module.prototype.load = function () {
  let extname = path.extname(this.id);
  Module._extensions[extname](this);
}

function myRequire(fileName) {
  //1. 对路径进行处理
  let mPath = Module._resolveFilename(fileName);
  //2. 缓存优先
  let cacheModule = Module._cache[mPath];
  if (cacheModule) return cacheModule.exports;
  //3. 创建空对象加载目标模块
  let module = new Module(mPath);

  //4 缓存已加载过的模块
  Module._cache[mPath] = module;

  //5 执行加载(编译执行)
  module.load();

  //6 返回数据
  return module.exports;
}
//需要处理路径
let obj = myRequire('./v');
console.log(obj);