import http from 'http';
import path from 'path';
import fs from 'fs';
import events from 'events';

const PORT = 5555;
const emiter = new events.EventEmitter();

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      const indexPath = path.join(path.resolve(), 'index.html');
      const stream = fs.createReadStream(indexPath);
      stream.pipe(res);
    } else if (req.url === '/get-message') {
      emiter.once('new-message', (message) => {
        res.writeHead(200, 'Ok', {
          'Content-Type': 'application/json',
        });
        res.write(message);
        res.end();
      });
    }
  }
  if (req.method === 'POST' && req.url === '/new-message') {
    let message = '';
    req.on('data', (chank) => (message += chank));
    req.on('end', () => {
      emiter.emit('new-message', message);
      res.writeHead(200, 'Ok', {
        'Content-Type': 'application/json',
      });
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port`);
});
