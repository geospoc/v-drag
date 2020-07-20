import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'VDrag',
      file: 'dist/v-drag.esm.js',
      globals: {
        vue: 'Vue',
      },
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      vue(),
    ],
    external: ['vue'],
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      name: 'VDrag',
      file: 'dist/v-drag.cjs.js',
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      vue(),
    ],
    external: ['vue'],
  },
  // UMD build.
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'VDrag',
      file: 'dist/v-drag.js',
      globals: {
        vue: 'Vue',
      },
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      vue(),
    ],
    external: ['vue'],
  },
];
