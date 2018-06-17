// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/importer.min.js',
        format: 'iife'
    },
    moduleName:'importer',
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        uglify()
    ]
};