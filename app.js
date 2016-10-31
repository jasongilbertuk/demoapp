var http=require('http');

function onRequest(req,res)
{
	res.end("Hello There");
}

var server = http.createServer(onRequest);
server.listen(3000);