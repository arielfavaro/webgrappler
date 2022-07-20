const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webgrappler.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'WebGrappler',
            type: 'global',
        }
    },
};
