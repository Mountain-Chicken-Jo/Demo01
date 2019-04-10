var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    })
    fs.writeFile("./text/2.txt", "我是123",{"flag":"a"}, (err) => {
        if (err) {
            throw err
        }
        console.log("成功");
        fs.readFile("./text/2.txt", (err, data) => {
            if (err) {
                throw err
            }
            console.log(data.toString())
        })
    })
    res.end()
}).listen(3000)