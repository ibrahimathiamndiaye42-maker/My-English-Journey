<script setup>
import {ref,onMounted} from 'vue';import {all,put} from '../db.js';import {schedule} from '../srs.js'
const due=ref([]);const i=ref(0);const a=ref('');const fb=ref(null)
onMounted(async()=>due.value=(await all('words')).filter(w=>w.due<=Date.now()))
const norm=s=>s.toLowerCase().trim()
async function check(){const w=due.value[i.value];const ok=norm(a.value)===norm(w.en);fb.value={ok,en:w.en};await put('words',schedule(w,ok))}
function next(){i.value++;a.value='';fb.value=null}
</script>
<template><h1>Révisions</h1>
<p v-if="!due.length">Aucun mot à réviser pour le moment. Revenez après avoir terminé des leçons.</p>
<p v-else-if="i>=due.length" class="ok">Séance terminée ({{due.length}} mots).</p>
<div v-else class="card"><p class="fr">Mot {{i+1}} / {{due.length}}</p><h2>{{due[i].fr}}</h2><p>Traduisez en anglais :</p>
<input v-model="a" :disabled="!!fb" @keyup.enter="!fb&&check()"> <button v-if="!fb" @click="check">Valider</button>
<div v-else><p :class="fb.ok?'ok':'ko'">{{fb.ok?'Correct !':'Réponse : '+fb.en}}</p><button class="g" @click="next">Suivant</button></div></div></template>
