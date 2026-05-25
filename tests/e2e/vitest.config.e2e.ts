import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
// import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    test: {
        // include: ['tests/e2e/**/*.spec.ts'],
        globals: true,
        root: './',
        setupFiles: './tests/e2e/setup.ts',
        environment: 'node',
    },
    plugins: [
        // tsConfigPaths(),
        swc.vite({
            module: { type: 'es6' },
            jsc: {
                parser: {
                syntax: 'typescript',
                tsx: true,
                },
                target: 'es2020',
            },
        }),
    ],

});