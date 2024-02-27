import { mkdir, readdir, copyFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const newFolder = join(dir, 'files_copy');
    try {
        const folder = join(dir, 'files');
        const files = await readdir(folder);
        await mkdir(newFolder, { recursive: false });
        files.forEach(async file => {
            const fileSource = join(folder, file);
            const fileDestination = join(newFolder, file);
            console.log(fileSource+'-'+fileDestination);
            await copyFile(fileSource, fileDestination);
          })
    } catch (e) {
        throw new Error("FS operation failed");
    } 
};

await copy();
