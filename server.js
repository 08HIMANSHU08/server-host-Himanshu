const http = require('http');

// function listener(req,res){
// }
// http.createServer(listener);
// http.createServer(function(req,res){

// });
// const server=http.createServer((req,res)=>{
//     console.log('Himanshu Singh Patel');
// });
// server.listen(4000);

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>First Page Using Node JS</title></body>');
    res.write('<body><h1>Himanshu Singh Patel</h1></body>');
    res.write('</html>');
    res.end();
    
});
server.listen(4000);

