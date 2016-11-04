var http=require('http');
var instance = require('ec2-instance-data');

function onRequest(req,res)
{
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.write('hello BON')
  	res.end();
}

instance.init(function(){
	var ip = instance.latest["meta-data"]["local-ipv4"];
	var server = http.createServer(onRequest);
	server.listen(3000,ip);	
});
