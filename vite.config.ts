import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
// https://vite.dev/config/

const __filename = fileURLToPath(import.meta.url);

// Lấy đường dẫn thư mục hiện tại
const __dirname = dirname(__filename);
export default defineConfig({
  plugins: [
    vue(),
    tsconfigPathsPlugin(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vue-router'],
      dts: 'src/auto-imports.d.ts', // plugins này sẽ tự động generated ra file auto-imports.d.ts trong source src.
      dirs: [], // chỗ này mình có thể thêm name folder nó sẽ tự động lấy tất cả các tên file trong folder đó và mình có thể gọi bất kì ở trong file Vue nào mà không cần import. (src/stores)
      vueTemplate: true,
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts', // plugins này sẽ tự động generated ra file components.d.ts trong source src.
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
})
