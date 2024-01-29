import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileName = join(dir, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = createReadStream(fileName);
    stream.on('data', (data) => {
        hash.update(data);
    });
    stream.on('end', () => {
        console.log(hash.digest('hex'));
    });

};

await calculateHash();