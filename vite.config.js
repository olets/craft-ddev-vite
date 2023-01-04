import ViteRestart from 'vite-plugin-restart';
import StimulusHMR from 'vite-plugin-stimulus-hmr';

export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: './src/js/app.js',
      },
    },
  },
  plugins: [
    ViteRestart({
      reload: [
        './templates/**/*',
      ],
    }),
    StimulusHMR(),
  ],
  publicDir: 'src/public',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
});
