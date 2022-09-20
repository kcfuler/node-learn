import path from "path";

//1.获取路径中的基础名称
/**
 * 01 返回的是接收路径当中的最后一个部分
 * 02 第二个参数作为后缀的时候，如果没有在当前路径中匹配到，就会被忽略
 * 03 处理目录的时候，如果结尾处有路径分割符，也会被忽略掉
 */
// console.log(__filename);
// console.log(path.basename(__filename));
//传入后缀之后会进行匹配
// console.log(path.basename(__filename, ".ts"));

//2.获取路径目录名
/**
 * 返回路径中的上一层路径的绝对路径
 */
// console.log(path.dirname(__filename));
// console.log(path.dirname("/a/b/c"));

//3. 获取路径的拓展名
/**
 * 01 返回路径中相应文件的后缀名
 * 02 返回路径中最后一个点之后的路径名
 */
console.log(path.extname(__filename));
console.log(path.extname("a/b/c/d"));
console.log(path.extname("adsf/fad.html.css.js."));
