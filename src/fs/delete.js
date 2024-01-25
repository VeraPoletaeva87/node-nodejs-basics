const remove = async () => {
    const { unlink } = await import('fs/promises');
    const path = await import('path');
    const dir = path.dirname('src/fs/files');
    try {
        const fileName = path.join(dir, '/files/fileToRemove.txt');
        await unlink(fileName);
    } catch (e) {
        throw new Error("FS operation failed");
    } 
    
};

await remove();