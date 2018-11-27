1. js 本身没有类除了基本数据类型外只有对象。  
    将对象的prototype链指向要继承的对象就能实现继承 使用该对象已有的方法
2. prototype 是函数的属性，
3. 继承三步
    - 父类的构造函数执行一下，相当于super()
    - prototype属性指向弗雷德实例。
    - 将prototype.constructor指向构造函数  

- 类 Parent 三部分  
1. 构造函数 new func() {}  <= this指向这个对象 
2. 构造函数 prototype属性方法 对象沿着原型链去查找方法  
3. 构造函数和原型链有联系的  
    Parent。prototype.constructor


- typeof 其实复杂数据类型只有function和object 是语法原生支持的，其他的都只是变种而已  
    function vs Object  
    一等对象， js 才是真正的面向对象 函数可以被执行的对象
    可以当作Object的构造函数

- prototype 属性只属于函数
    __proto__ 函数或方法都有此私有属性

    一个对象a的 __proto__ 属性指向的那个对象b，b就是a的原型对象，a拿到b里所有的属性和方法，也可以拿到b的原型对象c上的属性和方法，
    以此递归，谓之原型链