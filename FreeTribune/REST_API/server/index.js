import http from 'http';

const PORT = 5556;
const server = http.createServer((req, res) => {
  // res.write('Hello world!!!');
  // console.log('url:', req.url);
  // console.log('method:', req.method);
  // console.log('headers:', req.headers);
  // res.end();

  // URL
  // if (req.url === '/user/1') {
  //   res.end('I am user');
  // } else {
  //   res.writeHead(404, 'User not found');
  // }

  // Method
  if (req.method === 'GET') {
    res.end('Hello!');
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', (chank) => (body += chank));
    req.on('end', () => {
      const parseData = JSON.parse(body);
      console.log('body = ', body);
      res.writeHead(200, 'Ok', {
        'Content-Type': 'application/json',
      });
      res.end(body);
    });
  }
});

server.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT}`)
);
