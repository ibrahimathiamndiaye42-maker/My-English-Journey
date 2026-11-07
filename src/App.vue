<script setup>
import {ref,onMounted,onUnmounted,computed} from 'vue'
import Home from './views/Home.vue';import Program from './views/Program.vue';import Lesson from './views/Lesson.vue'
import Expressions from './views/Expressions.vue';import Dictionary from './views/Dictionary.vue';import Review from './views/Review.vue';import Settings from './views/Settings.vue'
const h=ref(location.hash.slice(2)||'home');const f=()=>h.value=location.hash.slice(2)||'home'
onMounted(()=>addEventListener('hashchange',f));onUnmounted(()=>removeEventListener('hashchange',f))
const page=computed(()=>h.value.split('/')[0]);const arg=computed(()=>h.value.split('/')[1])
const nav=[['home','Accueil'],['program','Programme'],['dictionary','Mots'],['expressions','Expressions'],['review','Révisions'],['settings','Réglages']]
const ev=ref(null),ios=/iphone|ipad/i.test(navigator.userAgent),inst=ref(matchMedia('(display-mode: standalone)').matches)
addEventListener('beforeinstallprompt',e=>{e.preventDefault();ev.value=e});addEventListener('appinstalled',()=>inst.value=true)
async function install(){ev.value.prompt();await ev.value.userChoice;ev.value=null}
const views={home:Home,program:Program,lesson:Lesson,dictionary:Dictionary,expressions:Expressions,review:Review,settings:Settings}
</script>
<template><main><div v-if="!inst" class="card"><button v-if="ev" class="g" @click="install">📲 Installer l’application sur mon téléphone</button><span v-else-if="ios">iPhone : touchez Partager puis « Sur l’écran d’accueil ».</span><span v-else>Pour installer : menu du navigateur → « Installer l’application » (ou « Ajouter à l’écran d’accueil »).</span></div><component :is="views[page]||Home" :arg="arg" :key="h"/></main>
<nav><a v-for="n in nav" :key="n[0]" :href="'#/'+n[0]" :class="{on:page===n[0]}">{{n[1]}}</a></nav></template>
