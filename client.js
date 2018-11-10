
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var net = require('net');

var client = new net.Socket();
client.connect(45454, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
	//console.log(client)
	process.stdin.on('data', function (text) {
	    //console.log('received data:', util.inspect(text));
	    client.write(text)
	    if (text === 'quit\n') {
	      //done();
	    }
	  });

});

client.on('data', function(data) {
	console.log('Server say: ' + data);
	//client.write(data)
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});