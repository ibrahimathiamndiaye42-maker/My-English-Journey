import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'
export default defineConfig({base:'./',plugins:[vue(),VitePWA({registerType:'autoUpdate',
manifest:{name:'My English Journey',short_name:'English Journey',description:'Your personal English learning academy',theme_color:'#12356b',background_color:'#f5f8fc',display:'standalone',
start_url:'./',scope:'./',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png'},{src:'icon-512.png',sizes:'512x512',type:'image/png'},{src:'icon-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]},
workbox:{globPatterns:['**/*.{js,css,html,svg,png}']}})]})
