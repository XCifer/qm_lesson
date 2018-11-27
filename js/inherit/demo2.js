function Person(){
    this.name = ['kevin','daisy'];
}
function Child(){
    // 如何获得Person属性？
    Person.call(this)
}
var child1 = new Child();
child1.name.push("yuya");
console.log(child1.name);

var child2 = new Child();
console.log(child2.name)