const fs=require('fs');
const { request } = require('http');

const requestHandeler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==="/"){
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter Message</title></body>');
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        })
        return;
    }   

    
    if(url==="/message"&&method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
            });
        }); 
    } 
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>First Page Using Node JS</title></body>');
    res.write('<body><h1>Himanshu Singh Patel</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports=requestHandeler;