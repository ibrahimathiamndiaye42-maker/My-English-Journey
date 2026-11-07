<script setup>
import {ref,onMounted} from 'vue';import {exportAll,importAll,get,put} from '../db.js';import {applyTheme,ACC} from '../theme.js'
const msg=ref('');const t=ref({theme:'blanc',accent:'bleu',bg:''});const FONDS=['#ffffff','#fdf6e3','#eaf3ff','#eaf7ef','#f3f4f6','#fff0f3']
onMounted(async()=>{const s=await get('settings','theme');if(s)t.value={theme:s.theme,accent:s.accent,bg:s.bg||''}})
async function setT(k,v){t.value={...t.value,[k]:v};applyTheme(t.value);await put('settings',{id:'theme',...t.value})}
async function exp(){const b=new Blob([JSON.stringify(await exportAll(),null,1)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='my-english-journey-sauvegarde.json';a.click()}
async function imp(e){try{await importAll(JSON.parse(await e.target.files[0].text()));msg.value='Sauvegarde restaurée.';const s=await get('settings','theme');if(s){t.value={theme:s.theme,accent:s.accent,bg:s.bg||''};applyTheme(t.value)}}catch(x){msg.value='Erreur : '+x.message}}
const diag=ref([])
onMounted(async()=>{const r=navigator.serviceWorker?await navigator.serviceWorker.getRegistration():null
let man=false;try{const l=document.querySelector('link[rel=manifest]');man=!!l&&(await fetch(l.href)).ok}catch(e){}
diag.value=[['Connexion sécurisée (HTTPS)',location.protocol==='https:'||location.hostname==='localhost'],['Manifeste de l’application trouvé',man],['Service worker actif',!!r],['Signal d’installation reçu du navigateur',!!window.__bip],['Ouverte en mode application installée',matchMedia('(display-mode: standalone)').matches]]})
async function refresh(){for(const r of await navigator.serviceWorker.getRegistrations())await r.unregister();for(const k of await caches.keys())await caches.delete(k);location.reload()}
</script>
<template><h1>Réglages</h1>
<div class="card"><h2>Apparence</h2><p>Thème :</p>
<button v-for="x in [['blanc','Blanc'],['clair','Clair'],['sombre','Sombre']]" :key="x[0]" :class="['o',{sel:t.theme===x[0]}]" @click="setT('theme',x[0])" style="margin-right:8px">{{x[1]}}</button>
<p>Couleur principale :</p>
<button v-for="(c,n) in ACC" :key="n" class="dot" :class="{sel:t.accent===n}" :style="{background:c}" :title="n" @click="setT('accent',n)"></button><p>Couleur de fond des pages (thèmes Blanc et Clair) :</p><button v-for="c in FONDS" :key="c" class="dot" :class="{sel:t.bg===c}" :style="{background:c,border:'1px solid #9aa9bf'}" @click="setT('bg',c)"></button><input type="color" :value="t.bg||'#ffffff'" @input="setT('bg',$event.target.value)"> <button class="o" @click="setT('bg','')">Par défaut</button></div>
<div class="card"><h2>Diagnostic d’installation</h2><p v-for="d in diag" :key="d[0]"><span :class="d[1]?'ok':'ko'">{{d[1]?'✓':'✗'}}</span> {{d[0]}}</p><p class="fr">Vos données ne sont pas effacées par le bouton ci-dessous.</p><button class="o" @click="refresh">Forcer la mise à jour de l’application</button></div>
<div class="card"><h2>Sauvegarde et restauration</h2><button @click="exp">Exporter mes données</button>
<p>Importer une sauvegarde (remplace les données actuelles) :</p><input type="file" accept=".json" @change="imp"><p>{{msg}}</p></div></template>
