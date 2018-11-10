
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo KLYS server\r\n');
	socket.pipe(socket);

	socket.on('data', function(data) {
			console.log('Cliente say: ' + data);	
	});
	
	process.stdin.on('data', function (text) {
	    //console.log('received data:', util.inspect(text));
	    socket.write(text)
	    if (text === 'quit\n') {
	      //done();
	    }
	  });
});



	server.on('connection', function() {
		console.log('New Client Connected.');

		//console.log(server)
		//server.destroy(); // kill client after server's response
	});


	server.on('error', function() {
		console.log('A client give a Error. maybe it just disconnected?.');
		//server.destroy(); // kill client after server's response
	});

	server.on('listening', function() {
		console.log("Server on.")
		
	});

	


server.listen(45454, '127.0.0.1');


