import { unlink } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileName = join(dir, 'files', 'fileToRemove.txt');
    try {
        await unlink(fileName);
    } catch (e) {
        throw new Error("FS operation failed");
    }  
};

await remove();