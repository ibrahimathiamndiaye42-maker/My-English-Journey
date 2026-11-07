<script setup>
import {ref,onMounted,nextTick} from 'vue';import {Chart,BarController,BarElement,CategoryScale,LinearScale,Tooltip} from 'chart.js'
import {all} from '../db.js';import {lessons} from '../content/index.js'
Chart.register(BarController,BarElement,CategoryScale,LinearScale,Tooltip)
const s=ref({done:0,words:0,exprs:0,avg:0,streak:0,next:null});const cv=ref()
onMounted(async()=>{const L=await all('lessons'),W=await all('words'),E=await all('expressions')
const ids=new Set(L.map(x=>x.id));const days=[...new Set(L.map(x=>x.date.slice(0,10)))].sort()
let streak=0;const d=new Date();while(days.includes(d.toISOString().slice(0,10))){streak++;d.setDate(d.getDate()-1)}
s.value={done:L.length,words:W.length,exprs:E.length,avg:L.length?Math.round(L.reduce((a,b)=>a+b.score,0)/L.length):0,streak,next:lessons().find(x=>!ids.has(x.id))}
await nextTick();const c={};L.forEach(x=>{const k=x.date.slice(0,10);c[k]=(c[k]||0)+1})
if(L.length)new Chart(cv.value,{type:'bar',data:{labels:Object.keys(c),datasets:[{label:'Leçons terminées',data:Object.values(c),backgroundColor:'#22a06b'}]},options:{scales:{y:{beginAtZero:true,ticks:{precision:0}}}}})})
</script>
<template><h1>My English Journey</h1><p class="fr">Your personal English learning academy</p>
<div class="card"><h2>Ma leçon du jour</h2>
<template v-if="s.next"><p>{{s.next.level}} · {{s.next.title}}</p><a class="btn g" :href="'#/lesson/'+s.next.id">Commencer (≈ 15 min)</a></template>
<p v-else>Toutes les leçons disponibles sont terminées. Révisez vos mots !</p></div>
<p v-if="!s.done">Bienvenue ! Vos statistiques apparaîtront après votre première leçon.</p>
<div class="grid"><div class="card stat"><b>{{s.done}}</b>leçons terminées</div><div class="card stat"><b>{{s.words}}</b>mots appris</div>
<div class="card stat"><b>{{s.exprs}}</b>expressions</div><div class="card stat"><b>{{s.avg}}%</b>score moyen</div><div class="card stat"><b>{{s.streak}}</b>jours consécutifs</div></div>
<div class="card" v-show="s.done"><canvas ref="cv"></canvas></div></template>
