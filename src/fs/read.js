import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileName = join(dir, 'files', 'fileToRead.txt');
    try {
        const text = await readFile(fileName, 'utf8');
        console.log(text);
    } catch (e) {
        throw new Error("FS operation failed");
    } 
};

await read();