const write = async () => {
    const fs = await import('fs');
    const path = await import('path');
    const dir = path.dirname('src/streams/files');
    const fileName = path.join(dir, '/files/fileToWrite.txt');
    const stream = fs.createWriteStream(fileName, 'utf-8');
    process.stdin.on('data', (data) => {
        stream.write(data);
    });
};

await write();