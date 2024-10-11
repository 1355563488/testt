// vite.config.js
import { defineConfig } from "file:///C:/Users/ZhuanZ%EF%BC%88%E6%97%A0%E5%AF%86%E7%A0%81%EF%BC%89/Desktop/%E9%A1%B9%E7%9B%AE/test/node_modules/.pnpm/vite@5.4.8/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/ZhuanZ%EF%BC%88%E6%97%A0%E5%AF%86%E7%A0%81%EF%BC%89/Desktop/%E9%A1%B9%E7%9B%AE/test/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8_vue@3.5.11/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///C:/Users/ZhuanZ%EF%BC%88%E6%97%A0%E5%AF%86%E7%A0%81%EF%BC%89/Desktop/%E9%A1%B9%E7%9B%AE/test/node_modules/.pnpm/unplugin-auto-import@0.18.3_@vueuse+core@9.13.0_vue@3.5.11__rollup@4.24.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/ZhuanZ%EF%BC%88%E6%97%A0%E5%AF%86%E7%A0%81%EF%BC%89/Desktop/%E9%A1%B9%E7%9B%AE/test/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.7_rollup@4.24.0_vue@3.5.11/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/ZhuanZ%EF%BC%88%E6%97%A0%E5%AF%86%E7%A0%81%EF%BC%89/Desktop/%E9%A1%B9%E7%9B%AE/test/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.7_rollup@4.24.0_vue@3.5.11/node_modules/unplugin-vue-components/dist/resolvers.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaaHVhblpcdUZGMDhcdTY1RTBcdTVCQzZcdTc4MDFcdUZGMDlcXFxcRGVza3RvcFxcXFxcdTk4NzlcdTc2RUVcXFxcdGVzdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcWmh1YW5aXHVGRjA4XHU2NUUwXHU1QkM2XHU3ODAxXHVGRjA5XFxcXERlc2t0b3BcXFxcXHU5ODc5XHU3NkVFXFxcXHRlc3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1podWFuWiVFRiVCQyU4OCVFNiU5NyVBMCVFNSVBRiU4NiVFNyVBMCU4MSVFRiVCQyU4OS9EZXNrdG9wLyVFOSVBMSVCOSVFNyU5QiVBRS90ZXN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVyxTQUFTLG9CQUFvQjtBQUMvWCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFFcEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
