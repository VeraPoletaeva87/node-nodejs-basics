const decompress = async () => {
    const fs = await import('fs');
    const zlib = await import('zlib');
    const path = await import('path');
    const dir = path.dirname('src/zip/files');
    const fileName = path.join(dir, '/files/fileToCompress.txt');
   
    const inputStream = fs.createReadStream(path.join(dir, '/files/archive.gz'));
    const unzip = zlib.createGunzip();
    const outputStream = fs.createWriteStream(fileName)
    inputStream.pipe(unzip).pipe(outputStream);
};

await decompress();