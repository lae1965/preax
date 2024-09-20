import http from 'http';
import path from 'path';
import fs from 'fs';
import events from 'events';

const PORT = 5555;
const emitter = new events.EventEmitter();

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      const indexPath = path.join(path.resolve(), 'index.html');
      const stream = fs.createReadStream(indexPath);
      stream.pipe(res);
    } else if (req.url === '/get-message') {
      console.log('Поступил запрос');
      res.writeHead(200, 'Ok', {
        Connection: 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cashe-Control': 'no-cashe',
      });
      emitter.on('new-message', (message) => {
        console.log('Пришло новое сообщение: ', message);
        res.write(`data: ${JSON.stringify(message)} \n\n`);
        res.end();
      });
    }
  }
  if (req.method === 'POST' && req.url === '/new-message') {
    let message = '';
    req.on('data', (chank) => (message += chank));
    req.on('end', () => {
      emitter.emit('new-message', JSON.parse(message));
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
