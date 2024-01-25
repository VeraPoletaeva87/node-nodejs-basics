const create = async () => {
  const fs = await import('fs');
  const path = await import('path');
  const dir = path.dirname('src/fs/files'); 
  const fileName = path.join(dir, '/files/fresh.txt');
  fs.open(fileName, 'wx', (err, fd) => {
    if (err) {
       throw new Error("FS operation failed");
    } else {
      fs.writeFile(fileName, "I am fresh and young", function(err) {
        if(err) {
          throw new Error(err.message);
        } else {
          console.log('file created successfuly');
        }
      }); 
    }
  })
}

await create();