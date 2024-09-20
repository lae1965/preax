import { Server } from 'socket.io';
import http from 'http';
import path from 'path';
import fs from 'fs';

const PORT = 5555;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const indexPath = path.join(path.resolve(), 'index.html');
    const stream = fs.createReadStream(indexPath);
    stream.pipe(res);
  }
});

const io = new Server(server);

io.on('connection', (client) => {
  console.log(`client ${client.id} connected`);
  client.on('client-msg', (data) => {
    // io.emit('server-msg', data);
    client.emit('server-msg', data);
    client.broadcast.emit('server-msg', data);
  });
});

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port`);
});
