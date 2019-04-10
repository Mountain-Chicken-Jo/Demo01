var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    })
    fs.readFile("./text/1.txt", (err, data) => {
        if(err){
            throw err
        }
        console.log(data.toString());
        res.end(data)
    })
}).listen(3000)