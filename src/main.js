import { createServer } from 'http';
import { compare } from './test.js';
const hostname = '0.0.0.0';
const port = 5000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(compare());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
