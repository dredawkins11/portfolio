import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), sassDts()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  base: "https://dredawkins11.github.io/portfolio"
})