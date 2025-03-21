import http from 'node:http';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { wrapContent } from './wrapContent';
import { App } from './App';

const server = http.createServer();

server.on('request', (request, response) => {
  response.setHeader('content-type', 'text/html');
  const title = 'React SSR';
  const content = renderToString(
    <StaticRouter location={request.url}>
      <App />
    </StaticRouter>,
  );
  response.end(wrapContent({ title, content }));
});

server.on('listening', () => {
  console.log('Server is listening on port 3000');
});

server.listen(3000);
