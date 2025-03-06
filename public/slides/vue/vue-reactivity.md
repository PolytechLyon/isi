### Réactivité

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="2">

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 10px;">

<div>

* Le problème

```javascript [5,7]
const { createApp } = Vue;
createApp({
 template: '{{ counter }}',
 setup() {
  let counter = 0;
  setInterval(() =>
      counter++, 500);
  return { counter }
 }
}).mount('#app');
```

<div data-code-example="vue-reactivity-problem" data-code-example-size="small"></div>

</div>

<div class="fragment" data-fragment-index="1">

* La solution

```javascript [5,7]
const { createApp, ref } = Vue;
createApp({
 template: '{{ counter }}',
 setup() {
  const counter = ref(0);
  setInterval(() =>
      counter.value++, 500);
  return { counter }
 }
}).mount('#app');
```

<div data-code-example="vue-reactivity-solution" data-code-example-size="small"></div>

</div> 

</div> 

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out" data-fragment-index="2">

* La fonction `ref()` envoie une référence réactive :
  * Sa valeur (champ `value`) est traqué.
  * Chaque changement déclenche une mise à jour de la page si nécessaire.
  * Pas besoin de déréférencement dans le gabarit.

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out">

Réactivité profonde

```javascript
createApp({
  template: '{{ a.twice() }}',
  setup() {
    const a = ref({
      b: { counter: 0 },
      twice() { return 2 * this.b.counter; },
    });
    setInterval(() => a.value.b.counter++, 500);
    return { a }
  }
}).mount('#app');
```

<div data-code-example="vue-deep-reactivity" data-code-example-size="small"></div>

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out">

* La réactivité des références d'objets est profonde.
  * La valeur est un proxy à l'objet original.
  * Fonction `toRaw()` pour déproxifier.
* La fonction `computed()` envoie une référence à une valeur dérivée à partir des autres références.

</div> <!-- .fragment -->


<div class="fragment fade-in-then-out">

Réactivité par proxy, le problème

```javascript [7, 8]
const { createApp, ref, computed } = Vue;
createApp({
  template: '{{ compare }}',
  setup() {
    const obj = {};
    const objRef = ref(obj);
    const compare = computed(() =>
            objRef.value === obj);
    return { compare };
  },
}).mount('#app');
```

<div data-code-example="vue-proxy-problem" data-code-example-size="small"></div>

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out">

Réactivité par proxy, la solution

```javascript [8]
const { createApp, ref, computed, toRaw } = Vue;
createApp({
  template: '{{ compare }}',
  setup() {
    const obj = {};
    const objRef = ref(obj);
    const compare = computed(() =>
            toRaw(objRef.value) === obj);
    return { compare };
  },
}).mount('#app');
```

<div data-code-example="vue-proxy-solution" data-code-example-size="small"></div>

</div> <!-- .fragment -->

<div class="fragment fade-in">

Références aux éléments de gabarit

```javascript
const { createApp, ref } = Vue;
createApp({
  template: '<form ref="formRef"><input @click="reset()"/></form>',
  setup() {
    const formRef = ref(null);  // Réf sera peuplé lors du montage
    const reset = () => formRef.value?.reset();
    return { formRef, reset };
  },
}).mount('#app');
```

<div data-code-example="vue-template-refs" data-code-example-size="small"></div>

</div> <!-- .fragment -->


</div> <!-- .r-stach -->
