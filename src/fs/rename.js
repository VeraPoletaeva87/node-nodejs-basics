import { open, rename as FileRename } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileNew = join(dir, 'files', 'properFilename.md');
    const fileOld = join(dir, 'files', 'wrongFilename.txt');
    try {
        await open(fileOld, 'r');
        await open(fileNew, 'wx');
        await FileRename(fileOld, fileNew);
    } catch (e) {
        throw new Error("FS operation failed");
    }
};

await rename();