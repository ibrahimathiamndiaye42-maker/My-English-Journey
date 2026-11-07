import {mk} from './packs.js'
// Format compact : mots "en|fr|catégorie" (exemple facultatif en 4e/5e champ) ; expressions "en|fr".
export const a1=[
mk('a1-u3-l1','Numbers, colours, time',`
one|un|num
two|deux|num
three|trois|num
four|quatre|num
five|cinq|num
six|six|num
seven|sept|num
eight|huit|num
nine|neuf|num
ten|dix|num
twenty|vingt|num
hundred|cent|num
thousand|mille|num
red|rouge|adj
blue|bleu|adj
green|vert|adj
yellow|jaune|adj
black|noir|adj
white|blanc|adj
today|aujourd'hui|adv
tomorrow|demain|adv
yesterday|hier|adv
week|semaine|n
month|mois|n
year|an, année|n
Monday|lundi|n
weekend|week-end|n
hour|heure|n
minute|minute|n
second|seconde|n`,`
What day is it today?|Quel jour sommes-nous ?
It's half past two.|Il est deux heures et demie.
It's a quarter to five.|Il est cinq heures moins le quart.
What's the date today?|Quelle est la date aujourd'hui ?
How much is it?|Combien ça coûte ?
It's ten dollars.|Ça coûte dix dollars.
My favourite colour is blue.|Ma couleur préférée est le bleu.
What's your phone number?|Quel est ton numéro de téléphone ?
See you on Monday.|À lundi.
At the weekend|Le week-end
Once a week|Une fois par semaine
Twice a month|Deux fois par mois
Every day|Tous les jours
In the morning|Le matin
In the evening|Le soir
At noon|À midi
At midnight|À minuit
Just a minute.|Un instant.
Right now|En ce moment, tout de suite
Next week|La semaine prochaine`),
mk('a1-u3-l2','House and objects',`
house|maison|n
room|pièce, chambre|n
kitchen|cuisine|n
bedroom|chambre à coucher|n
bathroom|salle de bain|n
living room|salon|n
door|porte|n
window|fenêtre|n
table|table|n
chair|chaise|n
bed|lit|n
sofa|canapé|n
wardrobe|armoire|n
floor|sol, étage|n
wall|mur|n
roof|toit|n
garden|jardin|n
key|clé|n
lamp|lampe|n
fridge|réfrigérateur|n
television|télévision|n
phone|téléphone|n
bag|sac|n
book|livre|n
pen|stylo|n
paper|papier|n
clock|horloge|n
mirror|miroir|n
towel|serviette de toilette|n
soap|savon|n`,`
Make yourself at home.|Fais comme chez toi.
Where is the bathroom?|Où sont les toilettes ?
Come in!|Entrez !
Close the door, please.|Ferme la porte, s'il te plaît.
Turn on the light.|Allume la lumière.
Turn off the TV.|Éteins la télé.
I live in an apartment.|J'habite dans un appartement.
I live with my family.|J'habite avec ma famille.
There is a table in the kitchen.|Il y a une table dans la cuisine.
There are two beds.|Il y a deux lits.
It's on the table.|C'est sur la table.
It's under the bed.|C'est sous le lit.
It's next to the window.|C'est à côté de la fenêtre.
Where did I put my keys?|Où ai-je mis mes clés ?
I can't find my phone.|Je ne trouve pas mon téléphone.
I need to clean my room.|Je dois nettoyer ma chambre.
Do you have Wi-Fi?|Avez-vous le Wi-Fi ?
What's the Wi-Fi password?|Quel est le mot de passe du Wi-Fi ?
Welcome to my home.|Bienvenue chez moi.
Don't worry.|Ne t'inquiète pas.`),
mk('a1-u3-l3','Places and transport',`
city|ville|n
street|rue|n
road|route|n
shop|boutique, magasin|n
market|marché|n
bank|banque|n
hospital|hôpital|n
school|école|n
university|université|n
mosque|mosquée|n
station|gare, station|n
airport|aéroport|n
bus|bus|n
train|train|n
car|voiture|n
taxi|taxi|n
bike|vélo|n
ticket|billet, ticket|n
map|carte, plan|n
left|gauche|n
right|droite|n
straight|tout droit|adv
corner|coin|n
bridge|pont|n
park|parc|n
beach|plage|n
restaurant|restaurant|n
hotel|hôtel|n
pharmacy|pharmacie|n
office|bureau|n`,`
Excuse me, where is the station?|Excusez-moi, où est la gare ?
Turn left.|Tournez à gauche.
Turn right.|Tournez à droite.
Go straight ahead.|Allez tout droit.
It's on the corner.|C'est au coin.
It's near here.|C'est près d'ici.
It's far from here.|C'est loin d'ici.
How far is it?|C'est à quelle distance ?
How long does it take?|Combien de temps ça prend ?
Is there a bank nearby?|Y a-t-il une banque près d'ici ?
I'm lost.|Je suis perdu.
Can you show me on the map?|Pouvez-vous me montrer sur la carte ?
One ticket, please.|Un billet, s'il vous plaît.
Which bus goes to the airport?|Quel bus va à l'aéroport ?
Where can I get a taxi?|Où puis-je prendre un taxi ?
Please stop here.|Arrêtez-vous ici, s'il vous plaît.
Keep the change.|Gardez la monnaie.
What time does the train leave?|À quelle heure part le train ?
The bus is late.|Le bus est en retard.
I walk to school.|Je vais à l'école à pied.`)]
export const a2=[
mk('a2-u1-l1','Travel and hotel',`
passport|passeport|n
visa|visa|n
luggage|bagages|n
suitcase|valise|n
flight|vol|n
gate|porte d'embarquement|n
boarding pass|carte d'embarquement|n
customs|douane|n
security|sécurité|n
arrival|arrivée|n
departure|départ|n
delay|retard|n
seat|siège, place|n
aisle|couloir (avion)|n
passenger|passager|n
pilot|pilote|n
trip|voyage, sortie|n
journey|trajet|n
tourist|touriste|n
reservation|réservation|n
receptionist|réceptionniste|n
check-in|enregistrement|n
check-out|départ de l'hôtel|n
double room|chambre double|n
single room|chambre simple|n
cancel|annuler|v
carry-on|bagage à main|n
refund|remboursement|n
tour|visite guidée, circuit|n
souvenir|souvenir (objet)|n`,`
Here is my passport.|Voici mon passeport.
What is the purpose of your visit?|Quel est le motif de votre visite ?
I'm here on holiday.|Je suis ici en vacances.
I'm here to study.|Je suis ici pour étudier.
How long are you staying?|Combien de temps restez-vous ?
I'll stay for two weeks.|Je resterai deux semaines.
Where is the baggage claim?|Où est la récupération des bagages ?
My luggage is missing.|Mes bagages sont perdus.
Which gate is it?|C'est quelle porte ?
The flight is delayed.|Le vol est retardé.
Boarding starts at six.|L'embarquement commence à six heures.
I'd like a window seat.|Je voudrais une place côté hublot.
I have a reservation.|J'ai une réservation.
I'd like to check in.|Je voudrais m'enregistrer.
What time is check-out?|À quelle heure faut-il libérer la chambre ?
Is breakfast included?|Le petit-déjeuner est-il compris ?
The air conditioning doesn't work.|La climatisation ne marche pas.
Could you wake me up at six?|Pourriez-vous me réveiller à six heures ?
I'd like to cancel my booking.|Je voudrais annuler ma réservation.
Have a safe trip!|Bon voyage !`),
mk('a2-u1-l2','Shopping and clothes',`
price|prix|n
cheap|bon marché|adj
expensive|cher|adj
size|taille, pointure|n
shirt|chemise|n
trousers|pantalon|n
dress|robe|n
shoes|chaussures|n
jacket|veste|n
hat|chapeau|n
scarf|écharpe, foulard|n
pocket|poche|n
cash|espèces|n
card|carte (bancaire)|n
receipt|reçu, ticket de caisse|n
discount|réduction|n
sale|soldes, vente|n
customer|client|n
seller|vendeur|n
basket|panier|n
change|monnaie|n
pay|payer|v
buy|acheter|v
sell|vendre|v
try on|essayer (un vêtement)|v
fit|aller (taille)|v
wear|porter (un vêtement)|v
cost|coûter|v
bargain|bonne affaire|n
gift|cadeau|n`,`
How much does this cost?|Combien coûte ceci ?
It's too expensive.|C'est trop cher.
Do you have a smaller size?|Avez-vous une taille plus petite ?
Can I try it on?|Puis-je l'essayer ?
Where are the fitting rooms?|Où sont les cabines d'essayage ?
It fits well.|Ça me va bien.
It's too big.|C'est trop grand.
I'll take it.|Je le prends.
I'm just looking, thanks.|Je regarde seulement, merci.
Do you accept cards?|Acceptez-vous les cartes ?
I'll pay in cash.|Je paierai en espèces.
Can I have a receipt?|Puis-je avoir un reçu ?
Is there a discount?|Y a-t-il une réduction ?
What a bargain!|Quelle bonne affaire !
Can you give me a better price?|Pouvez-vous me faire un meilleur prix ?
I'd like to return this.|Je voudrais rendre ceci.
Do you have this in blue?|L'avez-vous en bleu ?
It's on sale.|C'est en solde.
Keep the receipt.|Gardez le reçu.
It's a gift.|C'est un cadeau.`),
mk('a2-u1-l3','Health and work',`
health|santé|n
doctor|médecin|n
nurse|infirmier(ère)|n
medicine|médicament|n
pain|douleur|n
headache|mal de tête|n
fever|fièvre|n
cough|toux|n
tired|fatigué|adj
sick|malade|adj
head|tête|n
arm|bras|n
leg|jambe|n
hand|main|n
eye|œil|n
stomach|estomac, ventre|n
throat|gorge|n
back|dos|n
job|emploi|n
boss|patron|n
colleague|collègue|n
salary|salaire|n
meeting|réunion|n
interview|entretien|n
company|entreprise|n
employee|employé|n
manager|responsable|n
skill|compétence|n
experience|expérience|n
appointment|rendez-vous|n`,`
I don't feel well.|Je ne me sens pas bien.
I have a headache.|J'ai mal à la tête.
My stomach hurts.|J'ai mal au ventre.
I need to see a doctor.|J'ai besoin de voir un médecin.
I'd like to make an appointment.|Je voudrais prendre rendez-vous.
How often should I take it?|À quelle fréquence dois-je le prendre ?
Take it twice a day.|Prenez-le deux fois par jour.
Get well soon!|Rétablis-toi vite !
I'm allergic to peanuts.|Je suis allergique aux cacahuètes.
Do you have any experience?|Avez-vous de l'expérience ?
I'm looking for a job.|Je cherche un emploi.
I work as a teacher.|Je travaille comme enseignant.
Thank you for your time.|Merci pour votre temps.
Let's schedule a meeting.|Planifions une réunion.
I'll send you an email.|Je vous enverrai un e-mail.
Could you repeat that, please?|Pourriez-vous répéter, s'il vous plaît ?
I don't understand.|Je ne comprends pas.
Could you speak more slowly?|Pourriez-vous parler plus lentement ?
I'm sorry to hear that.|Je suis désolé de l'apprendre.
I'm good at languages.|Je suis doué pour les langues.`)]
