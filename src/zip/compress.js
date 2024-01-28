const compress = async () => {
    const fs = await import('fs');
    const zlib = await import('zlib');
    const path = await import('path');
    const dir = path.dirname('src/zip/files');
    const fileName = path.join(dir, '/files/fileToCompress.txt');
   
    const inputStream = fs.createReadStream(fileName);
    const zip = zlib.createGzip();
    const outputStream = fs.createWriteStream(path.join(dir, '/files/archive.gz'))
    inputStream.pipe(zip).pipe(outputStream);
};

await compress();