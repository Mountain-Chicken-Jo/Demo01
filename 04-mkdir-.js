var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    })
    if (req.url == "/favicon.ico") {
        return
    }

    //添加目录
    // fs.mkdir("./css",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log('添加成功');
    // })

    // 删除目录
    // fs.rmdir("./css", (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     console.log('删除成功')
    // })


    // 改文件名称
    // fs.rename("./text/1.txt",'./text/11.txt',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log('替换成功')
    // })

    //删除文件
    // fs.unlink("./text/2.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     console.log("删除文件成功")
    // })

    //判断文件是否存在,不存在则创建 
    // fs.exists("./css", (exists) => {
    //     if (exists) {
    //         console.log('该文件存在')
    //     } else {
    //         fs.mkdir("./css", (err) => {
    //             if (err) {
    //                 throw err
    //             }
    //         })
    //     }
    // })

    //读取文件夹信息
    fs.readdir("./text",(err,data)=>{
        if(err){
            throw err;
        }
        console.log(data)
    })

    //判断文件还是文件夹  isDirectory isFile
    // fs.stat("./text/1.txt",(err,stats)=>{
    //     if(err){
    //         throw err
    //     }else{
    //         if(stats.isDirectory()){
    //             console.log('这是文件夹')
    //         }else{
    //             console.log("这是文件")
    //         }
            
    //     }

    // })
    res.end();
}).listen(3000)