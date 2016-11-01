var http=require('http');

function onRequest(req,res)
{
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.write('hello BON')
  	res.end();
}

var server = http.createServer(onRequest);
server.listen(3000);