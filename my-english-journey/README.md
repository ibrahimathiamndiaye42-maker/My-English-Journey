# My English Journey
Your personal English learning academy — application PWA 100 % locale (Vue 3, Vite, IndexedDB, Chart.js).

## Prérequis
Node.js 18+ (https://nodejs.org).

## Installation et lancement (PowerShell)
```powershell
npm install
npm run dev
```
## Build de production
```powershell
npm run build
npm run preview
```
Hébergez le dossier `dist` sur un hébergement statique gratuit (Vercel, Netlify) pour installer l'app sur téléphone ("Ajouter à l'écran d'accueil").

## Hors ligne
Après le premier chargement, le service worker (vite-plugin-pwa) met l'app en cache.

## Sauvegarde
Réglages → Exporter mes données (JSON) ; Importer pour restaurer sur un autre appareil.

## Ajouter des leçons
Les cours sont dans `src/content/`. Copiez `a1-unit1.js` (structure unité → chapitres → leçons), puis importez la nouvelle unité dans `src/content/index.js` (`units:[...]` du niveau). Les données de progression (IndexedDB) ne sont pas affectées.

## État actuel
Disponible : A1, unité 1 (2 leçons complètes) ; les autres leçons sont générées depuis `src/content/packs*.js`. Ajoutez des paquets dans ce fichier pour étendre le contenu. Non encore réalisé : A2–C2, reste d'A1, évaluations de chapitre/unité, examens de niveau, exercices « remettre dans l'ordre », suivi du temps d'étude, page Progression détaillée, tests automatisés.
