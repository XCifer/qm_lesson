const fs = require('fs');

try {
//     fs.readFile('./a.txt', 'utf8', function (err, data) {
//         console.log(data);
//         fs.readFile('./b.txt', 'utf-8', function (err, data) {
//             console.log(data)
//         })
//     })

//     const dataA= fs.dataFileSync("./a.txt","utf-8")
//     const dataB= fs.dataFileSync("./b.txt","utf-8")
//     const dataC= fs.dataFileSync("./c.txt","utf-8")

    const fileAPromise = new Promise((resolve,reject)=>{
        fs.readFile("./a.txt","utf-8",function(err,data){
            if (err) reject(err)
            else resolve(data)
        })
    })
    const fileBPromise = new Promise((resolve,reject)=>{
        fs.readFile("./b.txt","utf-8",function(err,data){
            if (err) reject(err)
            else resolve(data)
        })
    })
    const fileCPromise = new Promise((resolve,reject)=>{
        fs.readFile("./c.txt","utf-8",function(err,data){
            if (err) reject(err)
            else resolve(data)
        })
    })

    Promise.all([fileAPromise,fileBPromise,fileCPromise])

    // fileAPromise
    // .then(data=>{
    //     console.log(data)
    //     return fileBPromise//return promise 实例可以继续
    // })
    // .then(data=>{
    //     console.log(data)
    //     return fileCPromise
    // })
    // .then(data=> {
    //     console.log(data)
    // })
    // .catch(err)

} catch (e) {
}


