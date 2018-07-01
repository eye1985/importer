// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';


const {NODE_ENV} = process.env;
const isProdEnv = NODE_ENV === 'production' ? true : false;
const devPlugins = isProdEnv ?
    []:
    [
        serve('dist'),
        livereload()
    ];

const uglifyPlugin = isProdEnv ? [uglify()] : [];

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/importer.polyfill.min.js',
        format: 'iife',
        name:'importer',
    },
    moduleContext:{
        'node_modules/whatwg-fetch/fetch.js':'window'
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        ...uglifyPlugin,
        ...devPlugins
    ]
};