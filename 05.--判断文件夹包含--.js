var http = require('http');
var fs = require('fs')
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    })
    if (req.url == "/favicon.ico") {
        return
    }

    fs.readdir("./text", (err, data) => {
        if (err) {
            throw err
        } else {
            //迭代处理 递归
            (function item(i) {
                var arr = []
                //什么时候结束
                if (i == data.length) {
                    return
                }
                //自己调用自己
                fs.stat("./text/" + data[i], (err, stats) => {
                    if (err) {
                        throw err
                    } else if (stats.isDirectory()) {
                        arr.push(data[i])
                        console.log(arr)
                    }
                    res.end();
                })
                item(i + 1)
            })(0)



            // for(let i=0;i<data.length;i++){
            //     fs.stat("./text/"+data[i],(err,stats)=>{
            //         if (err) {
            //             throw err
            //         }else if(stats.isDirectory()){
            //             console.log(data[i])
            //         }
            //     })
            // }
        }
    })
    // res.end();
}).listen(3000)