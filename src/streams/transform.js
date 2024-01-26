const stream = await import('stream');

class ReverseTransform extends stream.Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, enc, cb) {
        chunk = chunk.toString();
        this.push(chunk.split("").reverse().join(""));
        cb();
    }
};

const transform = async () => {
const reverse = new ReverseTransform();
process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();