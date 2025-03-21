import http from 'node:http';
import { wrapContent } from './wrapContent';

const server = http.createServer();

server.on('request', (_request, response) => {
  response.setHeader('content-type', 'text/html');
  const title = 'React SSR';
  const content = '<h1>Hello World</h1>';
  response.end(wrapContent({ title, content }));
});

server.on('listening', () => {
  console.log('Server is listening on port 3000');
});

server.listen(3000);
