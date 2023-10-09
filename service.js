import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const distPath = path.resolve(__dirname, 'dist');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});