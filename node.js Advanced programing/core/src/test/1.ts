function debounce(callBack: Function, delay: number): Function {
  let timer: any = null;
  return () => {
    if (timer !== null) {
      return;
    }
    timer = setTimeout(() => {
      callBack();
      timer = null;
    }, delay);
  };
}

function test1() {
  console.log("1");
}

console.log("start");

let d1 = debounce(test1, 1000 * 3);
d1();
