import path from 'path';
import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript';
import styles from 'rollup-plugin-styles';
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
      vue(),
      ts({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      }),
      styles({
        mode: ['extract', 'index.scss'],
        minimize: true,
        sourceMap: true,
      }),
    ],
  },
];
