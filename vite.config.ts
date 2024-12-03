import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
// https://vite.dev/config/

const __filename = fileURLToPath(import.meta.url);
console.log('fileURLToPath', fileURLToPath)
// Lấy đường dẫn thư mục hiện tại
const __dirname = dirname(__filename);
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vue-router'],
      dts: 'src/auto-imports.d.ts', // plugins này sẽ tự động generated ra file auto-imports.d.ts trong source src.
      dirs: [], // chỗ này mình có thể thêm name folder nó sẽ tự động lấy tất cả các tên file trong folder đó và mình có thể gọi bất kì ở trong file Vue nào mà không cần import. (src/stores)
      vueTemplate: true,
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts', // plugins này sẽ tự động generated ra file components.d.ts trong source src.
    }),
    tsconfigPaths(),
  ],
  resolve:{
    alias:{
      '@layouts': resolve(__dirname, './src/layouts'),
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
    }
  }
})

// resolve: {
  //   alias: {
  //     '@': resolve(__dirname, './src'),
  //     '@components': resolve(__dirname, './src/components'),
  //     '@layouts': resolve(__dirname, './src/layouts'),
  //     '@assets': resolve(__dirname, './src/assets'),
  //     '@pages': resolve(__dirname, './src/pages'),
  //   },
  // },