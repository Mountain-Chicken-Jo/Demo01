var http = require("http");
var url = require('url')
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html;charset=UTF-8"
    })
    if (req.url == "/favicon.ico") {
        return;
    }

    //路由
    if (req.url == "/") {
        fs.readFile("./html/index.html", (err, data) => {
            if (err) {
                throw err
            }
            res.end(data);
        })
    } else if (req.url == "/about") {
        fs.readFile("./html/about.html", (err, data) => {
            if (err) {
                throw err
            }
            res.end(data);
        })
    } else {
        fs.readFile("./html/404.html", (err, data) => {
            if (err) {
                throw err
            }
            res.end(data);
        })
    }
    // switch (req.url) {
    //     case "/":
    //         fs.readFile("./html/index.html", (err, data) => {
    //             if (err) {
    //                 throw err
    //             }
    //             res.end(data);
    //         })
    //     case "/about":
    //         fs.readFile("./html/about.html", (err, data) => {
    //             if (err) {
    //                 throw err
    //             }
    //             res.end(data);
    //         })
    //     default:
    //         fs.readFile("./html/about.html", (err, data) => {
    //             if (err) {
    //                 throw err
    //             }
    //             res.end(data);
    //         })
    // }
}).listen(3000)