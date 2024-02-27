import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const folder = join(dir, 'files');
    try {
        const files = await readdir(folder);
        console.log(files);
    } catch (e) {
        throw new Error("FS operation failed");
    } 
};

await list();