const copy = async () => {
    const { mkdir, readdir, copyFile } = await import('fs/promises');
    const path = await import('path');
    const dir = path.dirname('src/fs/files');
    const newFolder = path.join(dir, '/files_copy');
    try {
        const folder = path.join(dir, '/files');
        const files = await readdir(folder);
        await mkdir(newFolder, { recursive: false });
        files.forEach(async file => {
            const fileSource = path.join(folder, file);
            const fileDestination = path.join(newFolder, file);
            console.log(fileSource+'-'+fileDestination);
            await copyFile(fileSource, fileDestination);
          })
    } catch (e) {
        throw new Error("FS operation failed");
    } 
};

await copy();
