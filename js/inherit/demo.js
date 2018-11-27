function Parent(){
    this.name = 'Kevin';
}

// 父类，子类 由prototype 属性构成 原型式继承
// Person 函数？this指针 -> new Object
// Person 函数 js 本没有类，只有对象
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(){
    
}
// 原型链继承
Child.prototype = new Parent();
var child1 = new Child();
child1.getName();
