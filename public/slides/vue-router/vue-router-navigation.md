### Navigation avec Vue Router

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

**Vue Router**
* Bibliothèque officielle pour la navigation avec Vue
* Fonctionnalités avancées
  * Gestion des paramètres de route
  * Navigation programmatique (depuis le code)
  * Routes imbriquées
  * Redirections, etc.
</div>

<div class="fragment fade-in" data-fragment-index="1">
<div class="fragment fade-out" data-fragment-index="3">

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="2">

* `createRouter` est utilisé pour créer un routeur
* Le routeur est enregistré auprès de l'application 

```javascript not-runnable
const routes = [
  { path: '/', component: AppHome },
  { path: '/history', component: AppHistory },
]
const router = createRouter({
  history: createMemoryHistory(),  // pour la démo
  routes,
})
createApp({})
        .use(router)
        .mount('#app');
```
</div>

<div class="fragment fade-in" data-fragment-index="2">

* Les composants suivants sont enregistrés :
  * `<router-link>` : un lien, au lieu de `<a>`
  * `<router-view>` : sera remplacé par le composant correspondant à la route active 

```html
<div id="app">
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/history">History</router-link>
  </div>
  <div>
    <router-view />
  </div>
</div>
```
</div>

</div>

</div>
</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

<div data-code-example="vue-router" data-code-example-size="big"></div>

</div>


</div>
