const list = async () => {
    const { readdir } = await import('fs/promises');
    const path = await import('path');
    const dir = path.dirname('src/fs/files');
    try {
        const folder = path.join(dir, '/files');
        const files = await readdir(folder);
        console.log(files);
    } catch (e) {
        throw new Error("FS operation failed");
    } 
};

await list();