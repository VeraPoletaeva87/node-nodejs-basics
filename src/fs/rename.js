const rename = async () => {
    const { open, rename } = await import('fs/promises');
    const path = await import('path');
    const dir = path.dirname('src/fs/files'); 
    const fileNew = path.join(dir, '/files/properFilename.md');
    const fileOld = path.join(dir, '/files/wrongFilename.txt');
    try {
        await open(fileOld, 'r');
        await open(fileNew, 'wx');
        await rename(fileOld, fileNew);
    } catch (e) {
        throw new Error("FS operation failed");
    }
};

await rename();