<script setup>
import {ref,onMounted} from 'vue';import {exportAll,importAll,get,put} from '../db.js';import {applyTheme,ACC} from '../theme.js'
const msg=ref('');const t=ref({theme:'blanc',accent:'bleu'})
onMounted(async()=>{const s=await get('settings','theme');if(s)t.value={theme:s.theme,accent:s.accent}})
async function setT(k,v){t.value={...t.value,[k]:v};applyTheme(t.value);await put('settings',{id:'theme',...t.value})}
async function exp(){const b=new Blob([JSON.stringify(await exportAll(),null,1)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='my-english-journey-sauvegarde.json';a.click()}
async function imp(e){try{await importAll(JSON.parse(await e.target.files[0].text()));msg.value='Sauvegarde restaurée.';const s=await get('settings','theme');if(s){t.value={theme:s.theme,accent:s.accent};applyTheme(t.value)}}catch(x){msg.value='Erreur : '+x.message}}
</script>
<template><h1>Réglages</h1>
<div class="card"><h2>Apparence</h2><p>Thème :</p>
<button v-for="x in [['blanc','Blanc'],['clair','Clair'],['sombre','Sombre']]" :key="x[0]" :class="['o',{sel:t.theme===x[0]}]" @click="setT('theme',x[0])" style="margin-right:8px">{{x[1]}}</button>
<p>Couleur principale :</p>
<button v-for="(c,n) in ACC" :key="n" class="dot" :class="{sel:t.accent===n}" :style="{background:c}" :title="n" @click="setT('accent',n)"></button></div>
<div class="card"><h2>Sauvegarde et restauration</h2><button @click="exp">Exporter mes données</button>
<p>Importer une sauvegarde (remplace les données actuelles) :</p><input type="file" accept=".json" @change="imp"><p>{{msg}}</p></div></template>
