import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const compress = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileName = join(dir,  'files', 'fileToCompress.txt');
   
    const inputStream = createReadStream(fileName);
    const zip = createGzip();
    const outputStream = createWriteStream(join(dir, 'files', 'archive.gz'));
    inputStream.pipe(zip).pipe(outputStream);
};

await compress();