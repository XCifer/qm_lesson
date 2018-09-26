// choir 1000 duck
const choir = [];

var duck = {
    duckSing:function () {
         console.log('gagaga')
    }
    
}
var chicken = {
    chickenSing:function(){
        console.log("gegege")
    }
}

for (var i=0;i<999;i++){
    if(typeof duckSing === 'function'){
        choir.push(duck);
    }
}



function joinChoir(animal){
    if(animal && typeof animal.duckSing==='function'){
        choir.push(animal);
        
    }
    
}
for(var i=0;i<999;i++){
    joinChoir(duck);
}
console.log(choir.length);



chicken.duckSing = function(){
    console.log('gagaga')
}
joinChoir(chicken);
console.log(choir.length);

