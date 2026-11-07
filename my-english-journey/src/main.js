import {createApp} from 'vue'
import App from './App.vue'
import './style.css'
import {get} from './db.js'
import {applyTheme} from './theme.js'
window.__bip=null
addEventListener('beforeinstallprompt',e=>{e.preventDefault();window.__bip=e;dispatchEvent(new Event('bip-ready'))})
;(async()=>{let t={theme:'blanc',accent:'bleu'}
try{t={...t,...(await get('settings','theme'))}}catch(e){}
applyTheme(t);createApp(App).mount('#app')})()
