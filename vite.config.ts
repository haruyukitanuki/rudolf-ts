import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs')
    },
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: []
    }
  },
  plugins: [
    dts({
      // Bundle all declarations into one self-contained dist/index.d.ts (no relative
      // specifiers), so strict `moduleResolution: node16/nodenext` consumers don't trip on
      // extensionless imports. Powered by @microsoft/api-extractor.
      bundleTypes: true,
      include: ['src/**/*.ts'],
      // The bundled index.d.ts is fully inlined and types-only, so it doubles as the CJS
      // declaration. Emit a .d.cts twin for the package.json `require` → types condition.
      afterBuild: () => {
        fs.copyFileSync(
          path.resolve(__dirname, 'dist/index.d.ts'),
          path.resolve(__dirname, 'dist/index.d.cts')
        );
      }
    })
  ]
});
