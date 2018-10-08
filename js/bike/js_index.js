// 首字母大写， 构造函数
var BicycleShop;
// console.log(BicycleShop); //undefined
BicycleShop = null;
// console.log(BicycleShop);
BicycleShop = function (name) {
  this.name = name;
}
BicycleShop.prototype = {
  sellBicycle: function(model) {
    // 有很多的车型
    var bicycle;
    switch(model) {
      case 'The Speedster':
        bicycle = new Speedster();
        break;
      case 'The Lowrider':
        bicycle = new Lowrider();
        break;
      case 'The Comfort Cruiser':
        bicycle = new ComfortCruiser();
        break;
      default:
        bicycle = new Giant();
    }

    bicycle.assemble();
    bicycle.wash();
    return bicycle;
  }
}
// console.log(typeof BicycleShop);
// js BicycleShop 动态类型
// 变量 =  变量名 + 值 + 类型
// 变量没有赋值前， undefined , 
// 变量的类型由值来决定
// 类型决定变量的职责和功能

function Speedster() {
}
Speedster.prototype = {
  assemble: function() {},
  wash: function() {}
}

function Lowrider() {
}
Lowrider.prototype = {
  assemble: function() {},
  wash: function() {}
}

function ComfortCruiser() {
}
ComfortCruiser.prototype = {
  assemble: function() {},
  wash: function() {}
}


function Giant(model, price) {
}
Giant.prototype = {
  assemble: function() {},
  wash: function() {}
}


var bicycleShop = new BicycleShop('叶斌斌大佬的自行车店');
console.log(bicycleShop.name);
bicycleShop.sellBicycle('The Comfort Cruiser');
