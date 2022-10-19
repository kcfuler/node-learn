function isRectangleCover(rectangles: number[][]): boolean {
  //1. 矩形 -> 边集
  let len = rectangles.length * 2;
  let rs = new Array<number>(len)
    .fill(0)
    .map(() => new Array<number>(4).fill(0));

  let idx = 0;
  for (let rect of rectangles) {
    rs[idx++] = [rect[0], rect[1], rect[3], 1];
    rs[idx++] = [rect[2], rect[1], rect[3], -1];
  }
  //2. 排序
  rs.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  console.log(rs);

  //3. 合并同一 x 的边

  for (let i = 0; i < len; ) {
    let left = new Array<number[]>(); // 存储顶点相同的边 , 每一次都是新的
    let right = new Array<number[]>();
    let flag = i === 0;
    let x = i;
    //得到横坐标相同情况下的边的范围
    while (x < len && rs[x][0] === rs[i][0]) x++;
    // 判断这个范围的边是否符合要求 | 符合之后就合并
    while (i < x) {
      let list = rs[i][3] === 1 ? left : right;
      if (list.length === 0) {
        list.push(rs[i++]);
      } else {
        let pre = list[list.length - 1]; //获取到上一个添加的元素
        let cur = rs[i++];
        // 重叠
        if (cur[1] < pre[2]) return false;
        if (cur[1] === pre[2]) pre[2] = cur[2]; // 合并
        else list.push(cur);
      }
    }

    if (!flag && x < len) {
      // 如果在中间
      // 判断左右是否相等
      if (left.length !== right.length) return false;
      for (let j = 0; j < left.length; j++) {
        if (left[j][1] === right[j][1] && left[j][2] === right[j][2]) continue;
        else return false;
      }
    } else {
      // 如果在两边 , 判断边界是不是一条
      if (
        (left.length === 0 && right.length !== 1) ||
        (left.length !== 1 && right.length === 0)
      )
        return false;
    }
  }

  //4. 最后判断是否符合条件： 中间边 | 边缘边
  return true;
}

// console.log(
//   isRectangleCover([
//     [1, 1, 3, 3],
//     [3, 1, 4, 2],
//     [3, 2, 4, 4],
//     [1, 3, 2, 4],
//     [2, 3, 3, 4],
//   ])
// );
