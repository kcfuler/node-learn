const EventEmitter = require('events');

const ev = new EventEmitter();

// on , 多个注册事件会依次执行
ev.on('事件1', () => {
  console.log('事件1执行了');
});

ev.on('事件1', () => {
  console.log('事件1执行了--2');
})

// emit ， 每一次触发都会执行一次
ev.emit('事件1');
ev.emit('事件1');

// once
ev.once('事件1', () => {
  console.log('once -- 事件1');
})

//只会触发一次
ev.emit('事件1');
ev.emit('事件1');

// off 
let cbFn = (...args) => {
  console.log(args);
  console.log('事件1执行');
}

ev.on('事件1', cbFn);

// ev.emit('事件1', cbFn);
// ev.off('事件1', cbFn);
ev.emit('事件1', 1, 2, 3);

