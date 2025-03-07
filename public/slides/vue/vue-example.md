### Démo

<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="1">

```css fix
#app { button { position: absolute; } }
```

```html fix
<body>
  <div id="app">
    <button v-for="(style, key) in positions"
      :style :key @click.stop="remove">X</button>
  </div>
  <script src="https://unpkg.com/vue@3"></script>
  <script src="script.js"></script>
</body>
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

```javascript
const { createApp, ref } = Vue;
const app = createApp({
  setup() {
    const positions = ref([]);
    function pop({ x, y }) {
      positions.value.push({ left: `${x}px`, top: `${y}px` });
    }
    const remove = (e) => e.target.remove();
    document.addEventListener('click', pop);
    return { positions, remove };
  }
});
app.mount('#app');
```

</div>

<div class="fragment" data-fragment-index="3">
Résultat

<div data-code-example="vue-in-browser" data-code-example-size="big"></div>

</div>

</div>
