import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['tests/e2e/**/*.spec.ts'],
        globals: true,
        root: './',
        // environment: 'node',
        // setupFiles: './tests/setup.ts',
    },
    plugins: [
        swc.vite({
            module: { type: 'es6' },
            // jsc: {
            //     parser: {
            //     syntax: 'typescript',
            //     tsx: true,
            //     },
            //     target: 'es2020',
            // },
        }),
    ],

});