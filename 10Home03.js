var http = require('http')
var fs = require('fs');
var url = require('url')

http.createServer((req, res) => {
    // res.writeHead(200, {
    //     "Content-type": "text/html;charset=UTF-8"
    // })
    if (req.url == "/favicon.ico") {
        return;
    }

    if (req.url == "/") {
        fs.readFile("./html/index.html", (err, data) => {
            res.end(data);
        })
    } else if (req.url == "/red") {
        fs.readFile("./html/red.html", (err, data) => {
            res.end(data);
        })

    } else if (req.url == "/green") {
        fs.readFile("./html/green.html", (err, data) => {
            res.end(data);
        })

    } else if (req.url == "/css/green.css") {
        fs.readFile("./css/green.css", (err, data) => {
            res.end(data);
        })
    } else if (req.url == "/css/red.css") {
        fs.readFile("./css/red.css", (err, data) => {
            res.end(data);
        })
    } else if (req.url == "/img/1.png") {
        fs.readFile("./img/1.png", (err, data) => {
            res.end(data);
        })
    } else if (req.url == "/img/2.png") {
        fs.readFile("./img/2.png", (err, data) => {
            res.end(data);
        })
    }
}).listen(3000)