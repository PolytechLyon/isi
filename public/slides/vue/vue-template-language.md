### Syntaxe de gabarit

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Les gabarits sont des fragments HTML
  * Valides syntaxiquement
* Ils permettent de lier une partie du DOM avec l'instance du composant rendu

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Interpolation du texte, syntaxe moustache

```html
  <div id="app">
    <div>Greeting</div>
    <div>{{ greeting }}</div>
  </div>
```

<div data-code-example="vue-moustache"></div>

</div>

<div class="fragment fade-in-then-out">

* Liaison d'attributs d'éléments HTML

```html
  <div id="app">
    <progress value="0.5"></progress>
    <progress :value="progress"></progress>
  </div>
```

<div data-code-example="vue-attribute-binding"></div>

</div>

<div class="fragment fade-in-then-out">

* Liaison d'événement

```html
  <div id="app">
    <button @click="toggleText()">{{ text }}</button>
  </div>
```

<div data-code-example="vue-event-binding"></div>

</div>

<div class="fragment fade-in-then-out">

* Directives `v-if` et `v-else`

```html
  <div id="app">
    <button @click="show = !show">{{ show ? 'Hide' : 'Show' }}</button>
    <div v-if="show">Secret</div>
    <div v-else>******</div>
  </div>
```

<div data-code-example="vue-if-else"></div>

</div>


<div class="fragment fade-in">

* Directive `v-for` et attribut `:key` (recommandé)

```html
  <ul id="app">
    <li v-for="color in ['red', 'blue', 'green']" :key="color">
      <span :style="{ color }">{{ color }}</span>
    </li>
  </ul>
```

<div data-code-example="vue-for"></div>

</div>

</div>

<aside class="notes">
  
  * [Pourquoi attribut `:key` est recommendé](https://play.vuejs.org/#eNp9kk1vwjAMhv9KlEtBYu1hO7GC9iEO22Gb2G7LDqW4EEiTKB8Fqep/n5NCx2HiUjv24/q15ZY+ap02HuiU5rY0XDtiwXk9Z5LXWhlHWmKgIh2pjKpJgmhyzySTpZLWEcHxMwvE6DtREpIJSdxBRbM1AMnPONKVl6XjSiLZgLEwGpOWSRLr06YQHtIhgwVdqMmzXhBKwYeDWovCAb4IyZWIFj3BSXNTKTNjdMQRmhAu13Aco4l/Z/REBrZYgZi3LQkg6bo86yMDwKX2bp5nvT11yATvm2axa3RX3jmc5qEUvNxj65N4bLbsvTzrESzIswvtdEKdxd1VfJPurJK497gIRktVay7AvOuwKMvotF9RyBVCqMNrjDnjYXKOl1so9//Ed/YYYox+GLBgGhQ25FxhNoBrCenF5xsc0R+StVp7gfSV5BKsEj5o7LEnL9co+4KLal/i9XC5+bKLowNpz0MFoYHsIs8oXtTzldH/5N6md7EOz4N2v5eS5jc=)

</aside>


