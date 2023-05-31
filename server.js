const http = require('http');

// function listener(req,res){

// }
// http.createServer(listener);

// http.createServer(function(req,res){

// });

const server=http.createServer((req,res)=>{
    console.log('Himanshu Singh Patel');
});
server.listen(4000);


