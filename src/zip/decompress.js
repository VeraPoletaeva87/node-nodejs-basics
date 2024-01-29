import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileName = join(dir, 'files' , 'fileToCompress.txt');
   
    const inputStream = createReadStream(join(dir, 'files', 'archive.gz'));
    const unzip = createGunzip();
    const outputStream = createWriteStream(fileName)
    inputStream.pipe(unzip).pipe(outputStream);
};

await decompress();