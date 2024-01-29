import { open, writeFile } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const fileName = join(dir, 'files', 'fresh.txt');
  open(fileName, 'wx', (err, fd) => {
    if (err) {
       throw new Error("FS operation failed");
    } else {
      writeFile(fileName, "I am fresh and young", function(err) {
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