// Importing required modules
const http = require('http');
const url = require('url');

// Setting up server configuration
const hostname = '127.0.0.1';
const port = 8900;

// Creating the server
const server = http.createServer((req, res) => {
  // Parsing the request URL
  const reqUrl = url.parse(req.url, true);
  const path = reqUrl.pathname;
  // Removing leading and trailing slashes from the path
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Setting common response headers
  res.setHeader('Content-Type', 'application/json');

  // Handling /books endpoint
  if (trimmedPath === 'books') {
    switch (req.method) {
      case 'GET':
        // Responding to GET request
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Fetching all books' }));
        break;
      case 'PUT':
        // Responding to PUT request
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Updating book list' }));
        break;
      case 'DELETE':
        // Responding to DELETE request
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Deleting book list' }));
        break;
      default:
        // Responding when the method is not allowed
        res.writeHead(405);
        res.end(JSON.stringify({ message: 'Method not allowed' }));
    }
  } 
  // Handling /books/author endpoint
  else if (trimmedPath.startsWith('books/author')) {
    switch (req.method) {
      case 'GET':
        // Responding to GET request
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Fetching books by author' }));
        break;
      case 'POST':
        // Responding to POST request
        res.writeHead(201);
        res.end(JSON.stringify({ message: 'Adding new author book' }));
        break;
      case 'PUT':
        // Responding to PUT request
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Updating author book' }));
        break;
      default:
        // Responding when the method is not allowed
        res.writeHead(405);
        res.end(JSON.stringify({ message: 'Method not allowed' }));
    }
  } 
  // Handling not found paths
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

// Starting the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});