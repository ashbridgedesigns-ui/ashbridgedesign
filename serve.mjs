// Local preview server for dist/. Form posts are accepted and logged so the
// enquiry flow can be tested; on Netlify, Netlify Forms handles them instead.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(fileURLToPath(new URL('.', import.meta.url)), 'dist');
const port = Number(process.env.PORT) || 4321;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain' };

createServer(async (req, res) => {
  if (req.method === 'POST') {
    let size = 0;
    req.on('data', (c) => { size += c.length; });
    req.on('end', () => { console.log(`[form] enquiry received (${size} bytes)`); res.writeHead(200).end('ok'); });
    return;
  }
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = normalize(join(dist, url));
  if (!file.startsWith(dist)) return res.writeHead(403).end();
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }).end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type': types['.html'] }).end(await readFile(join(dist, '404.html')));
  }
}).listen(port, () => console.log(`Preview: http://localhost:${port}`));
