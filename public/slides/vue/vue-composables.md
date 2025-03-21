### Les composables

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Un *composable* est une fonction qui maintient une logique à état.
  * Réutilisation dans plusieurs composants
  * Gestion d'état commun
* Par convention, son nom commence par `use`.

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

Exemple : `useClickCoordinates()`

```javascript
const list = ref([]);
const coordinates = readonly(list);
function add({ x, y }) {
  list.value.push(new Coordinate(x, y));
}
function remove({ key }) {
  list.value = list.value.filter(c => c.key !== key);
}
document.addEventListener('click', add);

export default function useClickCoordinates() {
  return { coordinates, remove };
}
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

Utilisation dans un composant

```javascript [5]
const AppButton = {
  template: `<button :style @click.stop="remove">X</button>`,
  props: ['coordinate'],
  setup({ coordinate }) {
    const { remove } = useClickCoordinates();
    return {
      style: coordinate.style,
      remove: () => remove(coordinate),
    };
  }
}
```


</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

Ou un autre

```javascript [3]
const App = {
  setup() {
    const { coordinates } = useClickCoordinates();
    return { coordinates };
  },
  components: {
    'app-button': AppButton,
  }
}
```


</div>

<div class="fragment fade-in" data-fragment-index="4">

Résultat


<div data-code-example="vue-composables" data-code-example-size="big"></div>

</div>

</div>
