### Réactivité

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="2">

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 10px;">

<div>

* Le problème

```javascript not-runnable []
const { createApp } = Vue;
createApp({
 template: `<button @click="click">
  {{ counter }}</button>`,
 setup() {
  let counter = 0;
  function click() {
   counter++;
  }
  return { counter, click }
 }
}).mount('#app');
```

<div data-code-example="vue-reactivity-problem" data-code-example-size="small"></div>

</div>

<div class="fragment" data-fragment-index="1">

* La solution

```javascript not-runnable []
const { createApp, ref } = Vue;
createApp({
 template: `<button @click="click">
  {{ counter }}</button>`,
 setup() {
  const counter = ref(0);
  function click() {
   counter.value++;
  }
  return { counter, click }
 }
}).mount('#app');
```

<div data-code-example="vue-reactivity-solution" data-code-example-size="small"></div>

</div> 

</div> 

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out" data-fragment-index="2">

* La fonction `ref()` renvoie une référence réactive :
  * Sa valeur (champ `value`) est suivie
  * Chaque changement déclenche une mise à jour des composants impactés
  * Pas besoin de déréférencement dans le gabarit

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out">

Réactivité profonde

```javascript fix not-runnable
const { createApp, ref } = Vue;
createApp({
  template: `<button @click="click">
    {{ a.b.counter }}</button>`,
  setup() {
    const a = ref({ b: { counter: 0 } });
    function click() {
      a.value.b.counter++;
    }
    return { a, click }
  }
}).mount('#app');
```

<div data-code-example="vue-deep-reactivity" data-code-example-size="small"></div>

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out">

* La valeur est un proxy de l'objet original
* Fonction `toRaw()` pour déproxifier

```javascript []
const { ref, toRaw } = Vue;

const obj = {};
const objRef = ref(obj);
console.log(obj === objRef.value);        // false
console.log(obj === toRaw(objRef.value)); // true

```

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out">

* La fonction `computed()` renvoie une référence à une valeur dérivée à partir d'autres références

```javascript not-runnable
const { createApp, ref, computed } = Vue;
createApp({
  template: '<input v-model="text" /><br/>{{ reversed }}',
  setup() {
    const text = ref("");
    const reversed = computed(() => [...text.value].reverse().join(""));
    return { text, reversed };
  }
})
.mount('#app');
```

<div data-code-example="vue-reactivity-computed" data-code-example-size="small"></div>

</div> <!-- .fragment -->

<div class="fragment fade-in">

Références aux éléments de gabarit

```javascript not-runnable
const { createApp, ref } = Vue;
createApp({
  template: '<form ref="formRef"><input @click="reset()"/></form>',
  setup() {
    const formRef = ref(null);  // La réf sera remplie lors du montage
    const reset = () => formRef.value?.reset();
    return { formRef, reset };
  },
}).mount('#app');
```

<div data-code-example="vue-template-refs" data-code-example-size="small"></div>

</div> <!-- .fragment -->


</div> <!-- .r-stack -->
