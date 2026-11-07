import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'
export default defineConfig({base:'./',plugins:[vue(),VitePWA({registerType:'autoUpdate',
manifest:{name:'My English Journey',short_name:'English Journey',description:'Your personal English learning academy',theme_color:'#12356b',background_color:'#f5f8fc',display:'standalone',
icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},
workbox:{globPatterns:['**/*.{js,css,html,svg}']}})]})
