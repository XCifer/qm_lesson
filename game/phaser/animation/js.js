//const game = new Phaser.Game()

//Phaser 命名空间 namespace
const Phaser = {

};
Phaser.Game = function(w,h,type,ele,options){
    //函数被new运行，被称为构造函数
    console.log('!');
    this.width = w;
    this.height = h;
}

let zombiegame = new Phaser.Game(800,600);
console.log(zombiegame.width,zombiegame.height);