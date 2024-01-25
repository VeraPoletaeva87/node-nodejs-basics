const read = async () => {
    const { readFile } = await import('fs/promises');
    const path = await import('path');
    const dir = path.dirname('src/fs/files');
    try {
        const fileName = path.join(dir, '/files/fileToRead.txt');
        const text = await readFile(fileName, 'utf8');
        console.log(text);
    } catch (e) {
        throw new Error("FS operation failed");
    } 
};

await read();