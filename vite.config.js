// https://blog.csdn.net/z591102/article/details/119669708
// https://www.cnblogs.com/guxingzhe/p/14892979.html
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.ts
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
          resolveComponent: (name) => {
            return `vant/lib/${name}`;
          },
        },

      ],
    }),]
})
