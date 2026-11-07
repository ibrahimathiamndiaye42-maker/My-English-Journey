// Format : un paquet = leçon générée (vocabulaire + expressions + exercices QCM automatiques).
// Mots : "anglais|français|catégorie|exemple|traduction". Expressions : "anglais|français|contexte|exemple".
const P={n:'nom',v:'verbe',adj:'adjectif',adv:'adverbe',num:'nombre',conj:'conjonction',prep:'préposition'}
export const mk=(id,title,W,X)=>{const w=W.trim().split('\n').map(l=>{const[a,b,c,d,e]=l.split('|');return{en:a,fr:b,pos:P[c]||c,ex:d||'',exFr:e||''}})
const x=X.trim().split('\n').map(l=>{const[a,b,c,d]=l.split('|');return{en:a,fr:b,ctx:c||'',ex:d||''}});const n=w.length
const ex=[...w.slice(0,8).map((v,i)=>i%2?{type:'qcm',q:`Comment dit-on « ${v.fr} » en anglais ?`,options:[v.en,w[(i+3)%n].en,w[(i+7)%n].en].sort(),answer:v.en,explain:`« ${v.en} » = ${v.fr}. ${v.ex?'Exemple : '+v.ex:''}`}
:{type:'qcm',q:`Que signifie « ${v.en} » ?`,options:[v.fr,w[(i+3)%n].fr,w[(i+7)%n].fr].sort(),answer:v.fr,explain:`« ${v.en} » = ${v.fr}. ${v.ex?'Exemple : '+v.ex:''}`}),
...x.slice(0,3).map((v,i)=>({type:'qcm',q:`Que signifie « ${v.en} » ?`,options:[v.fr,x[(i+4)%x.length].fr,x[(i+6)%x.length].fr].sort(),answer:v.fr,explain:v.ctx||v.fr}))]
return{id,title,objectives:[`Apprendre ${n} mots et ${x.length} expressions sur le thème : ${title}`],vocab:w,expressions:x,exercises:ex,
summary:['Mots clés : '+w.slice(0,6).map(v=>v.en).join(', ')+'…','Expressions : '+x.slice(0,3).map(v=>v.en).join(' · ')]}}
export const packs=[
mk('a1-u2-l1','Family',`
mother|mère|nom|My mother is a nurse.|Ma mère est infirmière.
father|père|nom|My father works in Dakar.|Mon père travaille à Dakar.
brother|frère|nom|I have one brother.|J'ai un frère.
sister|sœur|nom|Her sister is a doctor.|Sa sœur est médecin.
son|fils|nom|He has a son.|Il a un fils.
daughter|fille (enfant)|nom|They have two daughters.|Ils ont deux filles.
husband|mari|nom|Her husband is kind.|Son mari est gentil.
wife|épouse|nom|His wife cooks very well.|Son épouse cuisine très bien.
parents|parents|nom|My parents live here.|Mes parents habitent ici.
grandmother|grand-mère|nom|My grandmother is seventy.|Ma grand-mère a soixante-dix ans.
grandfather|grand-père|nom|My grandfather tells stories.|Mon grand-père raconte des histoires.
uncle|oncle|nom|My uncle has a shop.|Mon oncle a une boutique.
aunt|tante|nom|Her aunt lives in Paris.|Sa tante habite à Paris.
cousin|cousin(e)|nom|My cousin is a student.|Mon cousin est étudiant.
baby|bébé|nom|The baby is sleeping.|Le bébé dort.`,`
This is my family.|Voici ma famille.|Pour présenter ses proches.|This is my family. This is my mother.
Do you have any brothers or sisters?|As-tu des frères et sœurs ?|Question courante pour faire connaissance.|Do you have any brothers or sisters? Yes, one sister.
I'm an only child.|Je suis enfant unique.|Quand on n'a ni frère ni sœur.|I'm an only child.
We get along well.|Nous nous entendons bien.|Parler d'une bonne relation.|My brother and I get along well.
She takes after her mother.|Elle tient de sa mère.|Ressemblance, expression courante.|She takes after her mother.
How's your family?|Comment va ta famille ?|Prendre des nouvelles.|Hi John! How's your family?
Give my regards to your parents.|Transmets mes salutations à tes parents.|Formule polie.|Give my regards to your parents.
He's the youngest of three.|C'est le plus jeune des trois.|Position dans la fratrie.|He's the youngest of three.
We're very close.|Nous sommes très proches.|Lien affectif.|My sister and I are very close.
I grew up in Dakar.|J'ai grandi à Dakar.|Parler de son enfance.|I grew up in Dakar.`),
mk('a1-u2-l2','Food and drinks',`
bread|pain|nom|I eat bread every morning.|Je mange du pain tous les matins.
rice|riz|nom|We eat rice for lunch.|Nous mangeons du riz au déjeuner.
fish|poisson|nom|The fish is fresh.|Le poisson est frais.
chicken|poulet|nom|I like grilled chicken.|J'aime le poulet grillé.
meat|viande|nom|She doesn't eat meat.|Elle ne mange pas de viande.
water|eau|nom|Can I have some water?|Puis-je avoir de l'eau ?
milk|lait|nom|I drink milk with my coffee.|Je bois du lait avec mon café.
tea|thé|nom|Would you like some tea?|Voulez-vous du thé ?
coffee|café|nom|I need a coffee.|J'ai besoin d'un café.
juice|jus|nom|An orange juice, please.|Un jus d'orange, s'il vous plaît.
egg|œuf|nom|I have an egg for breakfast.|Je mange un œuf au petit-déjeuner.
fruit|fruit|nom|Fruit is good for you.|Les fruits sont bons pour la santé.
vegetable|légume|nom|Eat more vegetables.|Mange plus de légumes.
hungry|affamé|adjectif|I'm hungry.|J'ai faim.
thirsty|assoiffé|adjectif|Are you thirsty?|As-tu soif ?`,`
I'm hungry.|J'ai faim.|On dit « be hungry », jamais « have hunger ».|I'm hungry. Let's eat!
Can I have the menu, please?|Puis-je avoir la carte, s'il vous plaît ?|Au restaurant, poli.|Excuse me, can I have the menu, please?
I'd like a coffee, please.|Je voudrais un café, s'il vous plaît.|Commander poliment.|I'd like a coffee, please.
Enjoy your meal!|Bon appétit !|Dit par le serveur ou un convive.|Here you are. Enjoy your meal!
It's delicious.|C'est délicieux.|Complimenter un plat.|Thank you, it's delicious.
Could I have the bill, please?|L'addition, s'il vous plaît.|Fin de repas (UK : bill, US : check).|Could I have the bill, please?
No sugar, thanks.|Sans sucre, merci.|Refuser poliment.|Tea? No sugar, thanks.
I'm full.|Je n'ai plus faim.|Après un repas.|No more, thanks. I'm full.
Help yourself.|Servez-vous.|Inviter à se servir.|Help yourself to some rice.
What's for dinner?|Qu'est-ce qu'on mange ce soir ?|Question en famille.|Mum, what's for dinner?`),
mk('a1-u2-l3','Daily routine',`
wake up|se réveiller|verbe|I wake up at six.|Je me réveille à six heures.
get up|se lever|verbe|He gets up early.|Il se lève tôt.
shower|douche|nom|I take a shower every day.|Je prends une douche chaque jour.
breakfast|petit-déjeuner|nom|Breakfast is at seven.|Le petit-déjeuner est à sept heures.
lunch|déjeuner|nom|We have lunch at one.|Nous déjeunons à treize heures.
dinner|dîner|nom|Dinner is ready.|Le dîner est prêt.
work|travailler|verbe|She works in a bank.|Elle travaille dans une banque.
study|étudier|verbe|I study English every day.|J'étudie l'anglais tous les jours.
sleep|dormir|verbe|Children sleep a lot.|Les enfants dorment beaucoup.
go to bed|se coucher|verbe|I go to bed at ten.|Je me couche à dix heures.
always|toujours|adverbe|I always drink water.|Je bois toujours de l'eau.
usually|d'habitude|adverbe|We usually eat at home.|Nous mangeons d'habitude à la maison.
sometimes|parfois|adverbe|Sometimes I walk to work.|Parfois, je vais au travail à pied.
never|jamais|adverbe|He never eats late.|Il ne mange jamais tard.
early|tôt|adverbe|She arrives early.|Elle arrive tôt.`,`
What time is it?|Quelle heure est-il ?|Demander l'heure.|Excuse me, what time is it?
I'm late.|Je suis en retard.|On dit « be late ».|Sorry, I'm late.
I'll be right back.|Je reviens tout de suite.|S'absenter brièvement.|Wait here. I'll be right back.
It's time to go.|Il est temps de partir.|Signaler le départ.|Come on, it's time to go.
I have a busy day.|J'ai une journée chargée.|Parler de son emploi du temps.|I have a busy day today.
See you tomorrow.|À demain.|Se quitter.|Bye! See you tomorrow.
Good night.|Bonne nuit.|Seulement avant de dormir ou de se quitter le soir.|Good night, sleep well.
Sleep well.|Dors bien.|Souhait avant le coucher.|Good night. Sleep well.
I get up at six.|Je me lève à six heures.|Décrire sa routine.|I get up at six every day.
Have a nice day!|Bonne journée !|Prendre congé poliment.|Thanks, have a nice day!`)]
