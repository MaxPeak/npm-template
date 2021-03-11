import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
    {
      file: pkg.borwser,
      format: 'umd',
      name: '$tools',
      plugins: [terser()],
    },
  ],
  plugins: [ts({ tsconfig: './tsconfig.json' })],
}
