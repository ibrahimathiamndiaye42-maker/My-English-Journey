<script setup>
import {ref} from 'vue';import {exportAll,importAll} from '../db.js'
const msg=ref('')
async function exp(){const b=new Blob([JSON.stringify(await exportAll(),null,1)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='my-english-journey-sauvegarde.json';a.click()}
async function imp(e){try{await importAll(JSON.parse(await e.target.files[0].text()));msg.value='Sauvegarde restaurée.'}catch(x){msg.value='Erreur : '+x.message}}
</script>
<template><h1>Sauvegarde et restauration</h1><div class="card"><button @click="exp">Exporter mes données</button>
<p>Importer une sauvegarde (remplace les données actuelles) :</p><input type="file" accept=".json" @change="imp"><p>{{msg}}</p></div></template>
