import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileName = join(dir, 'files', 'fileToWrite.txt');

    const stream = createWriteStream(fileName, 'utf-8');
    process.stdin.on('data', (data) => {
        stream.write(data);
    });
};

await write();