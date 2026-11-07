<script setup>
import {ref,computed,onMounted} from 'vue';import {all} from '../db.js'
const xs=ref([]);const q=ref('');onMounted(async()=>xs.value=await all('expressions'))
const list=computed(()=>xs.value.filter(x=>(x.en+x.fr).toLowerCase().includes(q.value.toLowerCase())).sort((a,b)=>a.en.localeCompare(b.en)))
</script>
<template><h1>Mes expressions</h1><div class="card"><input v-model="q" placeholder="Rechercher"></div>
<p v-if="!list.length">Aucune expression pour l’instant. Terminez une leçon pour les enregistrer.</p>
<div v-for="x in list" :key="x.id" class="card"><b>{{x.en}}</b> — {{x.fr}}<br><span class="fr">{{x.ctx}}</span><br><i>{{x.ex}}</i><br><a :href="'#/lesson/'+x.lesson">Leçon d’origine</a></div></template>
