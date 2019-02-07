var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var N = 4;
var client = new net.Socket();
client.connect(PORT, HOST, function() {
 console.log('5935512043 ' + HOST + ':' + PORT);
 client.write('5935512043');
});
client.on('data', function(data) {
if (data == 'OK') {
	client.write(''+N);
}
if (data == 'WRONG') {
	client.write(''+(N++));
}
if (data == 'BINGO') {
	console.log('BINGO')

	client.destroy();
}
 console.log('DATA: ' + data);

 
});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});
