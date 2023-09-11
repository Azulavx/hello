var http =  require('http');



console.log("Hello World");


http.createServer(function (reqest, response){
    response.writeHead(418, ('Content-type' , 'test/html'));

    response.write("Hello World");
    response.end();


} ).listen(8080);