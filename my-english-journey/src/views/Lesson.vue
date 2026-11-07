<script setup>
import {ref} from 'vue';import {findLesson} from '../content/index.js';import {put,get} from '../db.js'
const props=defineProps(['arg']);const L=findLesson(props.arg);const ans=ref({});const res=ref(null);const saved=ref(false)
const norm=s=>(s||'').toLowerCase().replace(/[’']/g,"'").replace(/[.!?]+$/,'').trim()
async function validate(){const r=L.exercises.map((e,i)=>({ok:norm(ans.value[i])===norm(e.answer)}));const score=Math.round(r.filter(x=>x.ok).length/r.length*100)
res.value={r,score};const now=new Date().toISOString()
await put('attempts',{id:'t'+Date.now(),lesson:L.id,score,date:now});await put('lessons',{id:L.id,score,date:now})
for(const v of L.vocab){const k=v.en.toLowerCase();const o=await get('words',k)
if(o){if(!o.appearances.includes(L.id))o.appearances.push(L.id);await put('words',o)}
else await put('words',{id:k,en:v.en,fr:v.fr,pos:v.pos,ex:v.ex,exFr:v.exFr,lesson:L.id,date:now,state:'a-apprendre',box:0,due:Date.now()+864e5,appearances:[L.id]})}
for(const x of L.expressions){const k=x.en.toLowerCase();if(!(await get('expressions',k)))await put('expressions',{id:k,en:x.en,fr:x.fr,ctx:x.ctx,ex:x.ex,lesson:L.id,date:now,state:'a-apprendre',box:0,due:Date.now()+864e5})}
saved.value=true}
</script>
<template><div v-if="!L" class="card">Leçon introuvable. <a href="#/program">Retour au programme</a></div>
<div v-else><p><a href="#/program">← Programme</a></p><h1>{{L.title}}</h1><p class="fr">{{L.level}} · {{L.unit}} · {{L.chapter}}</p>
<div class="card"><h2>Objectifs</h2><ul><li v-for="o in L.objectives" :key="o">{{o}}</li></ul></div>
<div class="card"><h2>Vocabulaire</h2><div v-for="v in L.vocab" :key="v.en"><b>{{v.en}}</b> — {{v.fr}} <i class="fr">({{v.pos}})</i><br><span class="fr" v-if="v.note">{{v.note}}<br></span>{{v.ex}} <span class="fr">— {{v.exFr}}</span><hr></div></div>
<div class="card"><h2>Expressions courantes</h2><div v-for="x in L.expressions" :key="x.en"><b>{{x.en}}</b> — {{x.fr}}<br><span class="fr">{{x.ctx}}</span><br><i>{{x.ex}}</i><hr></div></div>
<div class="card" v-if="L.grammar"><h2>{{L.grammar.title}}</h2><p>{{L.grammar.rule}}</p><p v-for="e in L.grammar.examples" :key="e[0]">{{e[0]}} <span class="fr">— {{e[1]}}</span></p>
<b>Erreurs fréquentes</b><ul><li v-for="e in L.grammar.errors" :key="e">{{e}}</li></ul></div>
<div class="card" v-if="L.dialogue"><h2>Dialogue</h2><p class="fr">{{L.dialogue.ctx}}</p><p v-for="(l,i) in L.dialogue.lines" :key="i"><b>{{l[0]}}:</b> {{l[1]}}<br><span class="fr">{{l[2]}}</span></p></div>
<div class="card"><h2>Exercices</h2>
<div v-for="(e,i) in L.exercises" :key="i"><p><b>{{i+1}}. {{e.q}}</b></p>
<div v-if="e.type==='qcm'"><label v-for="o in e.options" :key="o" style="display:block"><input type="radio" :name="'q'+i" :value="o" v-model="ans[i]" :disabled="!!res"> {{o}}</label></div>
<input v-else v-model="ans[i]" :disabled="!!res" placeholder="Votre réponse">
<p v-if="res"><span :class="res.r[i].ok?'ok':'ko'">{{res.r[i].ok?'Correct':'Incorrect'}}</span> — Réponse : {{e.answer}}. {{e.explain}}</p></div>
<button v-if="!res" class="g" @click="validate">Valider</button>
<div v-else><h3>Score : {{res.score}} %</h3><p v-if="saved">Leçon enregistrée. Mots et expressions ajoutés à vos dictionnaires.</p></div></div>
<div class="card"><h2>Résumé</h2><ul><li v-for="s in L.summary" :key="s">{{s}}</li></ul></div></div></template>
