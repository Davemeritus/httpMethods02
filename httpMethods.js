const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8900;

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const path = reqUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Set common headers
  res.setHeader('Content-Type', 'application/json');

  // Handling /books endpoint
  if (trimmedPath === 'books') {
    switch (req.method) {
      case 'GET':
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Fetching all books' }));
        break;
      case 'PUT':
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Updating book list' }));
        break;
      case 'DELETE':
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Deleting book list' }));
        break;
      default:
        res.writeHead(405);
        res.end(JSON.stringify({ message: 'Method not allowed' }));
    }
  } 
  // Handling /books/author endpoint
  else if (trimmedPath.startsWith('books/author')) {
    switch (req.method) {
      case 'GET':
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Fetching books by author' }));
        break;
      case 'POST':
        res.writeHead(201);
        res.end(JSON.stringify({ message: 'Adding new author book' }));
        break;
      case 'PUT':
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Updating author book' }));
        break;
      default:
        res.writeHead(405);
        res.end(JSON.stringify({ message: 'Method not allowed' }));
    }
  } 
  // Handle not found
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
