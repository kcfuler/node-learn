// 使用剩余类型配合类型推断来构造一个元组类型
function tuple<T extends unknown[]>( ...ts : T):T{
  return ts;
}

tuple(1,'213','asdfasdf',{fasdf:213});