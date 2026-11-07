<script setup>
import {ref,onMounted} from 'vue';import {LEVELS} from '../content/index.js';import {all} from '../db.js'
const done=ref({});onMounted(async()=>{(await all('lessons')).forEach(l=>done.value[l.id]=l.score)})
</script>
<template><h1>Programme</h1>
<div v-for="l in LEVELS" :key="l.id" class="card"><h2>{{l.id}} — {{l.name}}</h2>
<p v-if="!l.units.length" class="fr">Niveau pas encore disponible : contenus en cours de rédaction.</p>
<div v-for="u in l.units" :key="u.id"><h3>{{u.title}}</h3>
<div v-for="c in u.chapters" :key="c.id"><b>{{c.title}}</b><ul><li v-for="x in c.lessons" :key="x.id">
<a :href="'#/lesson/'+x.id">{{x.title}}</a> <span v-if="done[x.id]!==undefined" class="ok">✓ {{done[x.id]}}%</span></li></ul></div></div></div></template>
