### Les composants

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* L'interface utilisateur (page Web) est décomposée de plusieurs composants.
* Un composant est un élément isolé et réutilisable de la page Web.
* Les composants sont organisés dans une structure arborescente, avec un composant racine.

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Un composant Vue est un objet qui peut avoir :
  * Un gabarit (propriété `template`)
  * Une logique (méthode `setup()`)
  * Un ensemble d'attributs (propriété `props`)
  * Un ensemble d'événements (propriété `emits`)

</div>

<div class="fragment fade-in" data-fragment-index="2">
<div class="fragment fade-out" data-fragment-index="4">

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="3">

**Exemple**
</div>

<div class="fragment fade-in" data-fragment-index="3">

* Accessibles depuis le gabarit ce sont :
  * Les attributs `props` de composant
  * Les éléments de l'objet de retour de `setup()`
</div>

</div>

<pre><code
  class="javascript language-javascript"
  data-trim
  data-noescape
  data-line-numbers="|2,3,6"
  data-fragment-index="3">
const AppButton = {
  template: '&lt;button :style="position" @click.stop="remove">X&lt;/button>',
  props: ['position'],                    // lié au style
  setup() {
    return {
      remove: e => e.target.remove()      // déclenché par click
    };
  }
}
</code></pre>

</div>
</div>

<div class="fragment fade-in" data-fragment-index="4">
<div class="fragment fade-out" data-fragment-index="6">

* Le composant est enregistré auprès de l'application, ou auprès des composants qui l'utilisent.
* L'application Vue est le composant racine. <!-- .element class="fragment" data-fragment-index="5"  -->

<pre><code
  class="javascript language-javascript"
  data-trim
  data-noescape
  data-line-numbers="10|2-9"
  data-fragment-index="5">
const { createApp, ref } = Vue;
createApp({
  setup() {
    const positions = ref([]);
    document.addEventListener('click', ({ x, y }) =>
      positions.value.push({ left: `${x}px`, top: `${y}px` }));
    return { positions };
  }
})
.component('app-button', AppButton)
.mount('#app');
</code></pre>

</div>
</div>

<div class="fragment fade-in" data-fragment-index="6">
<div class="fragment fade-out" data-fragment-index="9">

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="7">

* Une fois enregistré, le composant peut être utilisé dans les gabarits d'autres composants.

``` []
  <div id="app">
        <app-button
            v-for="(position, key) in positions"
            :position="position"
            :key="key" />
  </div>
```
</div>

<div class="fragment fade-in-then-out" data-fragment-index="7">

* Les attributs passent de père en fils `:nom="valeur"`

``` [2-5]
  <div id="app">
        <app-button
            v-for="(position, key) in positions"
            :position="position"
            :key="key" />
  </div>
```
</div>

<div class="fragment fade-in" data-fragment-index="8">

* Syntaxe simplifiée `:nom` pour `:nom="nom"`

``` [2-5]
  <div id="app">
        <app-button
            v-for="(position, key) in positions"
            :position
            :key />
  </div>
```
</div>

</div>

</div>
</div>

<div class="fragment fade-in-then-out" data-fragment-index="9">

Résultat

<div data-code-example="vue-component" data-code-example-size="big"></div>


</div>

<div class="fragment fade-in-then-out" data-fragment-index="10">

* Un composant peut émettre des événements

```javascript [4,8]
const AppButton = {
    template: `<button :style @click.stop="remove">X</button>`,
    props: ['position'],
    emit: ['remove'],
    setup({ position }, { emit }) {
        return {
            style: { left: `${position.x}px`, top: `${position.y}px` },
            remove: () => emit('remove', position.key),
        };
    }
}
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="11">

* Le composant parent peut réagir à ces événements

```javascript [4,8]
    <app-button v-for="position in positions"
                @remove="remove"
                :position :key="position.key" />
```

<aside class="notes">

  * Tout le composant sera supprimé, et non pas seulement le bouton
  * La clé `key` ne peut plus être l'indice dans la liste
</aside>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="12">

Résultat

<div data-code-example="vue-emit" data-code-example-size="big"></div>


</div>


<div class="fragment fade-in-then-out" data-fragment-index="13">

* Crochet de cycle de vie de composant

```javascript [6,7]
setup() {
  const positions = ref([]);
  function pop({ x, y }) {
    positions.value.push({ left: `${x}px`, top: `${y}px` });
  }
  onMounted(() => document.addEventListener('click', pop));
  onUnmounted(() => document.removeEventListener('click', pop));
  return { positions };
}
```
</div>

<div class="fragment fade-in-then-out" data-fragment-index="14">

Résultat

<div data-code-example="vue-lifecycle-hooks" data-code-example-size="big"></div>


</div>

</div>
