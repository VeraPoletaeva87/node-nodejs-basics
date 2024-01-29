import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const fileName = join(dir, 'files', 'script.js');

    const child = spawn('node', [fileName, ...args], { stdio: 'pipe'});
    child.stdout.pipe(process.stdout);
    process.stdin.pipe(child.stdin);
    child.stdout.on('data', (data) => {
        console.log('received from child: ', data.toString());
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
