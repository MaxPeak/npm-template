import ts from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: false,
    },
    {
      file: `lib/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: false,
      plugins: [terser()],
    },
  ],
  plugins: [ts()],
}
