import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qrcode: resolve(__dirname, 'qrcode.html'),
        image: resolve(__dirname, 'image.html'),
        password: resolve(__dirname, 'password.html'),
        text: resolve(__dirname, 'text.html'),
        base64: resolve(__dirname, 'base64.html'),
        json: resolve(__dirname, 'json.html'),
        color: resolve(__dirname, 'color.html'),
        uuid: resolve(__dirname, 'uuid.html'),
        url: resolve(__dirname, 'url.html'),
        timestamp: resolve(__dirname, 'timestamp.html'),
        lorem: resolve(__dirname, 'lorem.html'),
        markdown: resolve(__dirname, 'markdown.html'),
        useragent: resolve(__dirname, 'useragent.html'),
        diff: resolve(__dirname, 'diff.html'),
        units: resolve(__dirname, 'units.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        contact: resolve(__dirname, 'contact.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
})
