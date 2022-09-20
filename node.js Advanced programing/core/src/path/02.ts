import path from "path";
// 1 解析路径
/**
 * 01 接受一个路径，返回一个对象，包含不同的信息
 * 02 root dir base ext name
 */
// const obj = path.parse("a/b/c/d/xxx/abc.html");
// console.log(obj);

// 5 序列化路径
/**
 * 是解析路径的逆过程
 */
// const obj = path.parse("a/b/c/d/xxx/abc.html");
// console.log(path.format(obj));

// 6 判断当前路径是否为绝对路径
// console.log(path.isAbsolute("foo"));
// console.log(path.isAbsolute("/foo"));
// console.log(path.isAbsolute(""));

// 7 拼接路径
/**
 * 注意：空路径会忽略，相对路径会起到对应的作用
 */
// console.log(path.join("/a/b/c", "d", "index.html"));
// console.log(path.join("a/b", "c", "../", "index.html"));

// 8 规范化路径
// console.log(path.normalize("a/b/c"));
// console.log(path.normalize("a///b/c../d"));
// console.log(path.normalize("a//\\/b/c\\/d")); // 可以识别特殊字符

// 绝对路径
/**
 * resolve([from],to);
 * 是要把 to 拼接成一个绝对路径
 * 找到第一个参数中的第一个 '/' ， '/'会成为 to 的值，函数会判断 from和 to 之间的关系
 * 如果没有关系，就只有 to 会被选取出来 ，如果有关系，那么就会进行拼接
 * 如果to 后面还有路径， 会进行拼接
 */
// console.log(path.resolve()); // 默认会获取我们的相对路径
console.log(path.resolve("/a", "b"));
