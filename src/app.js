import { writeFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Import and Configure nunjucks
const __dirname = dirname(fileURLToPath(import.meta.url));
import nunjucks from 'nunjucks';
nunjucks.configure(join(__dirname, 'templates'), { autoescape: true });


const html = nunjucks.render('index.njk', {hello: 'change'});
await writeFile(join(__dirname, '..', 'public','index.html'), html, 'utf-8');

