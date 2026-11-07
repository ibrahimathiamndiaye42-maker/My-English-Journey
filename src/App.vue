<script setup>
import {ref,shallowRef,onMounted,onUnmounted,computed} from 'vue'
import Home from './views/Home.vue';import Program from './views/Program.vue';import Lesson from './views/Lesson.vue'
import Expressions from './views/Expressions.vue';import Dictionary from './views/Dictionary.vue';import Review from './views/Review.vue';import Settings from './views/Settings.vue'
const h=ref(location.hash.slice(2)||'home');const f=()=>h.value=location.hash.slice(2)||'home'
const ev=shallowRef(window.__bip||null),help=ref(false)
const inst=ref(matchMedia('(display-mode: standalone)').matches||navigator.standalone===true)
const ua=navigator.userAgent,ios=/iphone|ipad|ipod/i.test(ua),inapp=/FBAN|FBAV|Instagram|WhatsApp|TikTok|Snapchat|Line\//i.test(ua)
const onBip=()=>ev.value=window.__bip,onInst=()=>inst.value=true
onMounted(()=>{addEventListener('hashchange',f);addEventListener('bip-ready',onBip);addEventListener('appinstalled',onInst)})
onUnmounted(()=>{removeEventListener('hashchange',f);removeEventListener('bip-ready',onBip);removeEventListener('appinstalled',onInst)})
async function install(){if(!ev.value){help.value=true;return}
try{await ev.value.prompt();await ev.value.userChoice}catch(e){help.value=true}
ev.value=null;window.__bip=null}
const page=computed(()=>h.value.split('/')[0]);const arg=computed(()=>h.value.split('/')[1])
const nav=[['home','Accueil'],['program','Programme'],['dictionary','Mots'],['expressions','Expressions'],['review','Révisions'],['settings','Réglages']]
const views={home:Home,program:Program,lesson:Lesson,dictionary:Dictionary,expressions:Expressions,review:Review,settings:Settings}
</script>
<template><main>
<div v-if="!inst" class="card"><button class="g" @click="install">📲 Installer l’application sur mon téléphone</button>
<div v-if="help"><p v-if="inapp"><b>Ouvrez cette page dans Chrome (Android) ou Safari (iPhone).</b> Les navigateurs intégrés à Facebook, WhatsApp, etc. ne permettent pas l’installation.</p>
<p v-else-if="ios">iPhone : dans <b>Safari</b>, touchez Partager (carré avec une flèche) puis « Sur l’écran d’accueil ».</p>
<p v-else>Android : dans Chrome, touchez le menu ⋮ puis « Installer l’application » ou « Ajouter à l’écran d’accueil ». Si ce choix n’existe pas, ouvrez Réglages → Diagnostic d’installation.</p></div></div>
<component :is="views[page]||Home" :arg="arg" :key="h"/></main>
<nav><a v-for="n in nav" :key="n[0]" :href="'#/'+n[0]" :class="{on:page===n[0]}">{{n[1]}}</a></nav></template>
