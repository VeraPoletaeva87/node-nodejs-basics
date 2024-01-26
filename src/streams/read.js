const read = async () => {
    const fs = await import('fs');
    const path = await import('path');
    const dir = path.dirname('src/streams/files');
    const fileName = path.join(dir, '/files/fileToRead.txt');
    const stream = fs.createReadStream(fileName, 'utf-8');
    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    stream.on('end', () => {
        process.stdout.write('\n');
    });
};

await read();