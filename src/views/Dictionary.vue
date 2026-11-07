<script setup>
import {ref,computed,onMounted} from 'vue';import {all,put,del} from '../db.js'
const words=ref([]);const q=ref('');const st=ref('');const n=ref({en:'',fr:''})
const load=async()=>words.value=await all('words');onMounted(load)
const list=computed(()=>words.value.filter(w=>(!st.value||w.state===st.value)&&(w.en+w.fr).toLowerCase().includes(q.value.toLowerCase())).sort((a,b)=>a.en.localeCompare(b.en)))
async function add(){const k=n.value.en.trim().toLowerCase();if(!k||!n.value.fr.trim())return
await put('words',{id:k,en:n.value.en.trim(),fr:n.value.fr.trim(),pos:'',ex:'',exFr:'',lesson:null,date:new Date().toISOString(),state:'a-apprendre',box:0,due:Date.now(),appearances:[],perso:true});n.value={en:'',fr:''};load()}
async function setState(w,s){await put('words',{...w,state:s});load()}
async function rm(w){await del('words',w.id);load()}
</script>
<template><h1>Mon dictionnaire</h1>
<div class="card"><input v-model="q" placeholder="Rechercher"> <select v-model="st"><option value="">Tous les états</option><option value="a-apprendre">À apprendre</option><option value="en-cours">En cours</option><option value="maitrise">Maîtrisé</option></select></div>
<div class="card"><b>Ajouter un mot</b><br><input v-model="n.en" placeholder="Anglais"> <input v-model="n.fr" placeholder="Français"> <button @click="add">Ajouter</button></div>
<p v-if="!list.length">Aucun mot pour l’instant. Terminez une leçon pour remplir votre dictionnaire.</p>
<div v-for="w in list" :key="w.id" class="card"><b>{{w.en}}</b> — {{w.fr}} <i class="fr">{{w.pos}}</i><br><span class="fr">{{w.ex}} {{w.exFr}}</span><br>
<a v-if="w.lesson" :href="'#/lesson/'+w.lesson">Leçon d’origine</a>
<select :value="w.state" @change="setState(w,$event.target.value)"><option value="a-apprendre">À apprendre</option><option value="en-cours">En cours</option><option value="maitrise">Maîtrisé</option></select>
<button v-if="w.perso" class="o" @click="rm(w)">Supprimer</button></div></template>
