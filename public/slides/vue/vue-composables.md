### Les composables

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Un *composable* est une fonction qui maintient une logique à état.
* Il permet la réutilisation de la même logique dans plusieurs compsants
* Par convention, son nom commence par `use`.

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

Exemple : `useClickCoordinates()`

```javascript
/**
 * Store mouse clicks in a reactive array.
 */
function useClickCoordinates() {
  const coordinates = ref([]);
  function pop({ x, y }) {
    coordinates.value.push({ x, y });
  }
  onMounted(() => document.addEventListener('click', pop));
  onUnmounted(() => document.removeEventListener('click', pop));
  return { coordinates };
}
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

Exemple : utilisation dans un composant

```javascript [3]
createApp({
  setup() {
    const { coordinates } = useClickCoordinates();
    const toPosition = ({ x, y }) =>
        ({ left: `${x}px`, top: `${y}px` });
    const positions = computed(() =>
        coordinates.value?.map(toPosition));
    return { positions };
  }
}).mount('#app');
```


</div>

<div class="fragment fade-in" data-fragment-index="3">

Résultat


<div data-code-example="vue-composables" data-code-example-size="big"></div>

</div>

</div>
