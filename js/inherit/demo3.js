function Parent(name){
    this.name = name;
    this.colors=['red','blue','green'];
}
Parent.prototype.getName=function(){
    console.log(this.name)
}

function Child(name,age){
    Parent.call(this,name)// == super
    this.age = age;
}

Child.prototype = new Parent();
Child.prototype.sayHello = function(){
    console.log(`Hi, I am ${this.name}, I am ${this.age} years old.`);
}
var child1 = new Child('a',8)
child1.sayHello();
child1.getName();