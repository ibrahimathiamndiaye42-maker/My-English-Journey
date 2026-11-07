import u1 from './a1-unit1.js'
import {packs} from './packs.js'
import {a1,a2} from './packs2.js'
import {a2b,b1} from './packs3.js'
import {b1b,b2} from './packs4.js'
import {c1,c2} from './packs5.js'
const u3={id:'a1-u3',title:'Essentials: numbers, home, city',chapters:[{id:'a1-u3-c1',title:'Vocabulaire et expressions essentiels',lessons:a1}]}
const u4={id:'a2-u1',title:'Travel, shopping and health',chapters:[{id:'a2-u1-c1',title:'Voyage, achats, santé et travail',lessons:a2}]}
const u5={id:'a2-u2',title:'Leisure, weather and feelings',chapters:[{id:'a2-u2-c1',title:'Loisirs, météo et émotions',lessons:a2b}]}
const u6={id:'b1-u1',title:'Opinions, studies and work',chapters:[{id:'b1-u1-c1',title:'Opinions, études à l’étranger et anglais professionnel',lessons:b1}]}
const u7={id:'b1-u2',title:'Technology, money and society',chapters:[{id:'b1-u2-c1',title:'Technologie, argent, environnement et société',lessons:b1b}]}
const u8={id:'b2-u1',title:'Culture, business and argumentation',chapters:[{id:'b2-u1-c1',title:'Culture, entreprise et argumentation',lessons:b2}]}
const u9={id:'c1-u1',title:'Academic English and nuance',chapters:[{id:'c1-u1-c1',title:'Anglais académique, nuances et idiomes',lessons:c1}]}
const u10={id:'c2-u1',title:'Mastery: precision, register, idioms',chapters:[{id:'c2-u1-c1',title:'Précision, registre formel et expressions avancées',lessons:c2}]}
const u2={id:'a1-u2',title:'Everyday life: family, food, routine',chapters:[{id:'a1-u2-c1',title:'Vocabulaire et expressions du quotidien',lessons:packs}]}
export const LEVELS=[
{id:'A1',name:'Débutant',units:[u1,u2,u3]},
{id:'A2',name:'Élémentaire',units:[u4,u5]},{id:'B1',name:'Intermédiaire',units:[u6,u7]},
{id:'B2',name:'Intermédiaire avancé',units:[u8]},{id:'C1',name:'Avancé',units:[u9]},{id:'C2',name:'Maîtrise',units:[u10]}]
export const lessons=()=>LEVELS.flatMap(l=>l.units.flatMap(u=>u.chapters.flatMap(c=>c.lessons.map(x=>({...x,level:l.id,unit:u.title,chapter:c.title})))))
export const findLesson=id=>lessons().find(l=>l.id===id)
