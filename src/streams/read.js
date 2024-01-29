import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileName = join(dir, 'files', 'fileToRead.txt');
    const stream = createReadStream(fileName, 'utf-8');
    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    stream.on('end', () => {
        process.stdout.write('\n');
    });
};

await read();