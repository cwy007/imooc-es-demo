// ES5 中定义常量的方式
Object.defineProperty(window, 'PI', {
  value: 3.14,
  writable: false
})
console.log(PI);
PI = 5
console.log(PI);

// ES6
const a = 5
// a = 6 // 2-3const.js:12 Uncaught TypeError: Assignment to constant variable.
// const 在声明的时候要赋值
// 块级作用域
// 不存在提升，存在暂时性死区

// 第二章：词法作用域
// https://www.kancloud.cn/kancloud/you-dont-know-js-scope-closures/516610
