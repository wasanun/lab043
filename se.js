var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var server = net.createServer();
let answer = 16;
server.listen(PORT, HOST);
server.on('connection', function(sock) {
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   sock.on('data', function(data) {
       //console.log('DATA ' + sock.remoteAddress + ': ' + data);
       //sock.write('You said "' + data + '"');
       var i = 0;
      
       if (data == answer) {
       	sock.write('BINGO');
       	sock.destroy();
       }
       if (data == '5935512043') {
        sock.write('OK');
       }
       else if (data !== answer) {
       	sock.write('WRONG');
       	i++
       }
       if (i < 0){
        sock.destroy();
       }
   });

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
});
