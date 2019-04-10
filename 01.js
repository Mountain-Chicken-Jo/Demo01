var http=require('http');
var url=require('url');
http.createServer((req,res)=>{
    var result=url.resolve('http://127.0.0.1/public/',"index.html")
    console.log(result);
    res.end() ;
}).listen(3000)