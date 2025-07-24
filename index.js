const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end(' my CI/CD app!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
