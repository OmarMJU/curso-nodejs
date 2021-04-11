const Transform = require("stream").Transform;

class MyTransformCamelClass extends Transform {
    constructor(options) {
        super(options);
    }

    _transform (chunk, encoding, callback) {
        this.push(this._camelCase(chunk));
        callback();
    }

    _camelCase(datas) {
        const stringDatas = datas.toString().split(" ");
        stringDatas.map(letters => this.push(letters.charAt(0).toUpperCase() + letters.slice(1)));
    }
}

const objetTransform = new MyTransformCamelClass();
process.stdin.pipe(objetTransform).pipe(process.stdout);