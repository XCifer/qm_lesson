// 云函数入口文件
const cloud = require('wx-server-sdk')
const AppId = '1255613280'
const SecretId = "AKID7vb5NVvZimleLre6UlrjsmfOvLaetE8T"
const SecretKey ="Np8MQIoCVTKzU7dyAMXdZNfnpgLpALNF"
const fs = require("fs")
const path = require("path")
const { ImageClient} = require('image-node-sdk')
cloud.init()

let imageClient = new ImageClient({AppId,SecretId,SecretKey});
// 云函数入口函数
exports.main = async (event, context) => {
    return await imageClient.imgPornDetect({
        formData:{
            // node 文件系统 fs rwd+, Path 提供路径对象
            image:fs.createReadStream(path.join(__dirname,'./timg.jpg'))
        },
        headers:{
            'content-type':'multipart/form-data'
        }
    })
}