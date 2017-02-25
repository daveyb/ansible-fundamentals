var http = require('http');
var util = require('util');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World!')
    response.end();

}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
   
     //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);

});
