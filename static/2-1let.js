// var a = 5
// console.log(a);
// // delete a
// // console.log(a);
// console.log(window.a);


// b = 6
// console.log(b);
// // delete b
// // console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(window.b);


// let a = 5
// console.log(a); // 5
// console.log(window.a); // undefined

// var a = 5;
// var a = 6;
// console.log(a);

// let a = 5;
// let a = 6;
// console.log(a);

// var a = 5
// if (true) {
//   a = 6; // Uncaught ReferenceError: Cannot access 'a' before initialization
//   let a;
// }

// // 比较隐蔽的暂时性死区现象
// function foo(a = b, b=2) {
//   console.log(a, b);
// }
// foo() // Uncaught ReferenceError: Cannot access 'b' before initialization

// for (var i = 0; i < 3; i++) {
//   console.log('循环内：' + i); // 1 2 3
// }
// console.log('循环外：' + i); // 3


// for (let i = 0; i < 3; i++) {
//   console.log('循环内：' + i); // 1 2 3
// }
// console.log('循环外：' + i); // 2-1let.js:48 Uncaught ReferenceError: i is not defined

// if (false) {
//   var  a= 5
// }
// console.log(a); // undefined

// if (true) var a = 5 // 不报错
// if (true) let a = 5 // Uncaught SyntaxError: Lexical declaration cannot appear in a single-statement context

// for (var i = 0; i < 3; i++) {
//   // 异步操作
//   // js 中事件循环操作 EventLoop 机制
//   // 主线程空闲，并且时间也到的时候才执行
//   // for 循环是同步操作
//   // i 是循环完成以后的值
//   setTimeout(function() {
//     console.log(i); // 3 3 3
//   });
// }

// for (var i = 0; i < 3; i++) {
//   (function(j){
//     setTimeout(function () {
//       console.log(j); // 0 1 2
//     });
//   })(i)
// }

// 转成 es5 后，自动地形成一个闭包，保留i在每一次循环中的状态
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 0 1 2
  })
}
