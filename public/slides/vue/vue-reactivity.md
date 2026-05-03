### Réactivité

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="2">

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 10px;">

<div>

* Le problème

```javascript []
const { createApp } = Vue;
createApp({
 template: '{{ c }}',
 setup() {
  let c = 0;
  setInterval(() => c++, 500);
  return { c }
 }
}).mount('#app');
```

<div data-code-example="vue-reactivity-problem" data-code-example-size="small"></div>

</div>

<div class="fragment" data-fragment-index="1">

* La solution

```javascript []
const { createApp, ref } = Vue;
createApp({
 template: '{{ c }}',
 setup() {
  const c = ref(0);
  setInterval(() => c.value++, 500);
  return { c }
 }
}).mount('#app');
```

<div data-code-example="vue-reactivity-solution" data-code-example-size="small"></div>

</div> 

</div> 

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out" data-fragment-index="2">

* La fonction `ref()` envoie une référence réactive :
  * Sa valeur (champ `value`) est traquée.
  * Chaque changement déclenche une mise à jour des composants impactés.
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

```javascript []
const { ref, toRaw } = Vue;

const obj = {};
const objRef = ref(obj);
console.log(obj === objRef.value);        // false
console.log(obj === toRaw(objRef.value)); // true

```

</div> <!-- .fragment -->

<div class="fragment fade-in-then-out">

* La fonction `computed()` envoie une référence à une valeur dérivée à partir des autres références.

```javascript
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

```javascript
const { createApp, ref } = Vue;
createApp({
  template: '<form ref="formRef"><input @click="reset()"/></form>',
  setup() {
    const formRef = ref(null);  // Réf sera peuplée lors du montage
    const reset = () => formRef.value?.reset();
    return { formRef, reset };
  },
}).mount('#app');
```

<div data-code-example="vue-template-refs" data-code-example-size="small"></div>

</div> <!-- .fragment -->


</div> <!-- .r-stack -->
