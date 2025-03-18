<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

### Les utils
* Outil de gestion de paquets `npm`
* Groupeur de modules (bundler) `esbuild`
* Serveur de développement `vite`

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

### Installation npm
* Linux Debian (une méthode)
  * `apt install npm` veilles versions node et npm
  * `sudo npx n latest` dernières versions
* Windows
  * https://nodejs.org/en/download/prebuilt-installer

</div>

<div class="fragment fade-in-then-out">

### Création d'un projet Vue 3
* `npm init vite my-project -- -t vue`
    * Créer un projet dans le dossier `my-project`
* Le fichier `package.json` contient les informations du projet

</div>

<div class="fragment fade-in-then-out">

### Démarrage du serveur
* Dans le répertoire qui contient `package.json`
    * `npm i` pour installer les dépendances
    * `npm run dev` pour démarrer le serveur de développement
    * Adresse : `http://localhost:5174/`
    * Ceci est un serveur *de développement*

</div>

<div class="fragment fade-in-then-out">

### Compilation du projet
* Dans le répertoire qui contient `package.json`
    * `npm run build` pour compiler le projet
    * Le répertoire `dest` contiendra les livrables
    * `npm run preview` permet de lancer un serveur pour tester les livrables

</div>

</div>
