import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    external: ['vue'],
    output: {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
      assetFileNames: '[name][extname]',
    },
    plugins: [
      terser(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
      ts(),
    ],
  },
];
