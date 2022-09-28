function debounce(callback, delay) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      const context = this;
      callback.apply(context, args);
    }, delay);
  };
}

function t1() {
  console.log("111");
}

let d1 = debounce(t1, 3 * 1000);
d1();
console.log("start");
