import http from 'http';
import axios from 'axios';

const PORT = 3333;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/exchange-rate') {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://api.apilayer.com/exchangerates_data/latest?symbols=USD&base=EUR',
          {
            headers: {
              apikey: 'ao7rmXHhbMuyEzT7JSycw6GLO72BlPwO',
              'Content-Type': 'application/json',
            },
          }
        );
        res.end(JSON.stringify({ exchange: `1 EUR = ${data.rates.USD} USD` }));
      } catch (e) {
        res.writeHead(500, 'Something wrong');
        res.end();
      }
    })();
  } else {
    res.writeHead(404, 'This endpoint is not found');
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port`);
});
