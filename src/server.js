import http from 'node:http';

const server = http.createServer();

server.on('request', (_request, response) => {
  response.setHeader('content-type', 'text/html');
  response.end('<h1>Hello World</h1>');
});

server.on('listening', () => {
  console.log('Server is listening on port 3000');
});

server.listen(3000);
