/**
 * Created by cql on 2017/6/24.
 */

// import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/svg-draw.js',
    // entry: 'src/lib/draw-arc.js',
    format: 'cjs',
    plugins: [
        resolve({
            // jail: 'E:/_work/Dropbox/github/modules/base-libs/js/'
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        babel({
            exclude: 'node_modules/**', // only transpile our source code
            // runtimeHelpers: true,
            // plugins: ['external-helpers'],
            // externalHelpers: true
        }),
        commonjs(),
        // vue()
    ],
    dest: 'dist/svg-draw.js' // equivalent to --output
}
