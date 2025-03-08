### Navigation sans librairie

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="2">

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Un composant peut être une variable dynamique, déterminée lors de l'exécution 

```javascript
const routes = { '/': AppHome, '/history': AppHistory };
const currentPath = ref(window.location.hash);
addEventListener('hashchange', () => currentPath.value = window.location.hash);
// Composant Dynamique
const CurrentView = computed(() => routes[currentPath.value.slice(1) || '/']);
createApp({
  setup() {
    return { CurrentView };
  }
}).mount('#app');
```
</div>

<div class="fragment fade-in" data-fragment-index="1">

* L'élément `<component>` et l'attribut `is` permettent de réaliser ce comportement

```html
<div id="app">
  <div>
    <a href="#/">Home</a> | <a href="#/history">History</a>
  </div>
  <div>
    <component :is="CurrentView" />
  </div>
</div>
```
</div>

</div>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

<div data-code-example="vue-dynamic-component" data-code-example-size="big"></div>

</div>

</div>
