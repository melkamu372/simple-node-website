import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = resolve(__dirname, 'dist');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(resolve(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});