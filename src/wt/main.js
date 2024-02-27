import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const fileName = join(dir, 'worker.js');

const createWorker = (n) => new Promise(resolve => {
    const worker = new Worker(fileName, {workerData: n+10});
    worker.on('message', (message) => {
        resolve({
            status: 'resolved',
            data: message
        });
    });

    worker.on('error', () => {
        resolve({
            status: 'error',
            data: null
        });
    });
})

const performCalculations = async () => {
    const workers = [];
        const coreNumber = cpus().length;
        for (let i=0; i < coreNumber; i++ ) {
            const worker = createWorker(i);
            workers.push(worker);
        }
        const result = await Promise.all(workers);
        console.log(result);
};

await performCalculations();