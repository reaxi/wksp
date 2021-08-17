import typescript from '@rollup/plugin-typescript';
import shebang from 'rollup-plugin-preserve-shebang';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'commonjs',
    },
    plugins: [
        shebang(),
        typescript(),
        nodeResolve(),
        terser({
            output: {
                comments: false,
            },
        }),
    ],
};
