let a = {name:'a'}  //JSON Object
let b = {age:18}
let c = {hobby:'coding'}

a.__proto__ = b;
b.__proto__ = c;

console.log(a.name,a.age,a.hobby)