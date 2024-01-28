const calculateHash = async () => {
    const fs = await import('fs');
    const crypto = await import('crypto');
    const path = await import('path');
    const dir = path.dirname('src/hash/files');
    const fileName = path.join(dir, '/files/fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(fileName);
    stream.on('data', (data) => {
        hash.update(data);
    });
    stream.on('end', () => {
        console.log(hash.digest('hex'));
    });

};

await calculateHash();