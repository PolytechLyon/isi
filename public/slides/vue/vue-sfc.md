### Composant mono-fichier

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="2">

* Un format de fichier spécial qui permet le regroupement de :
  * Gabarit du composant (HTML)
  * Logique du composant (JavaScript)
  * Style du composant (CSS)
* Aussi appelé SFC (Single-file component)
<li class="fragment" data-fragment-index="1">
 <strong>Nécessite une phase de compilation</strong>
</li>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Extension `.vue`
* Structure

```vue
<script>
</script>

<template>
</template>

<style>
</style>
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

* Template en HTML

```vue
<template>
  <div>
    <button
        v-for="position in positions"
        :style="position"
        @click.stop="remove">X</button>
  </div>
</template>
```

</div>

<div class="fragment fade-in-then-out">

* Style avec portée limitée au composant

```vue
<style scoped>
  button  { position: absolute; }
</style>
```

</div>

<div class="fragment fade-in-then-out">

* Logique qui expose la fonction `setup`

<div data-external-example="https://play.vuejs.org/#eNqNU9uK2zAQ/RUhCnHAdR7ap6wTeiEPLb3RCxTqwnrtcVa7siR0cR2C/70jKXa8yxJW+EEzc2Z0zsz4SN8qlXUO6JrmptJM2W0hWKuktuRINDQpkeKzdMJC7a+/RBsNMpBGy5YsMHlRiEJAH5JqaErHMbkQBI8B61SyHE1/KimMJUoaZhleycY/k/z5u7w6YxonKh9FmEqOpE/JgQwPqvgz1ci6kjvIlDO3iObQ2DW5fnHsB9Vfp8RKFcyDN7HM7J3hMS0NrewAOSWwJJstgcyWeg82i4Fknjw1JkGBG+zbmVktK9eCsFlZ17sOL5+YsSBAJ4uKs+p+kXply4fVpt5eqBdpPLOkxuZrgXOcGpWOAocTDBuAX76aZo+GhVbx0kJgkNesO1HJb5y1EhGxeveykXpT0LE4YX5cp4cKOsLWxh44zHDn0JtAPDM4IIxHZgXd/s5X8aVIYBUZ5KsZLzRDWWIqqaBGT8wgM7FrUt4YyZ2FKy8TNfoMhNKUWswTDdtnd0YK3P2wWAWtZKsYB/1VnUSsx5UraMm5/Pcx+Kx2kI7+6haq+yf8d6b3voJ+02BAe2VTLO5UDO9+fIEe71OwlbXjiL4Q/A5BWGimh71zokbaM1xg+yH8x0zsf5pdj7tiRlGeqEcOAV9Q/IffX5B+pvsqex3ycGvo8B/Pl193"></div>

```vue
<script>
import { ref, onMounted, onUnmounted } from 'vue'
export default {
  setup() {
    const positions = ref([]);
    function pop({ x, y }) {
      positions.value.push({ left: `${x}px`, top: `${y}px` });
    }
    const remove = (e) => e.target.remove();
    onMounted(() => document.addEventListener('click', pop));
    onUnmounted(() => document.removeEventListener('click', pop));
    return { positions, remove };
  }
}
</script>
```

</div>
<div class="fragment fade-in-then-out">

* Logique simplifiée avec l'attribut `setup`

<div data-external-example="https://play.vuejs.org/#eNqFU8lu2zAQ/ZUBUcAyoMqH9uTYRhf40KIbugAFygJRpJHDRCIJLooMQ/+eIRkpPgSJTrO8N/NmODqx91oXvUe2ZhtbGaEdWHRe77gUnVbGwQkMNjko+VV56bAO5h/ZJQdGaIzqYEElFlxyWSlpHWhlhRNkwjaws3//lxdcNl5WIUppnZ1gyOEI4xJOXAJ9M6foy9Zjob29JlSLjVvD5avTMOrhMgendHSPwSU61R2ntgY71SP1zHAJ2x1g4UpzQFekRBbA8xxZFjChd60q36F0RVnX+56ML8I6lGiyRdWK6naRB8XLxJ5Hf4Kf2rxQYrNKeyYqOQ473ZYOY6FNLfpokHnlnVOECA5A/7pRZsvZtCQQYYsPC+Nsgq2tO7Z4hntMvYs6Ckv7o3xSytnu72aVOiUBq6RgszrTRW4sC7ZSGmuKJAbQaUx91lBeWdV6hxdAz0EzBgZBWc4c8WQjDsWNVZLuLL43Z5XqtGjRfNcPQ6ynS+CsbFt19znGnPGYT/HqGqvbJ+I3dggxzn4YtGjCZHMunUBK7399w4HsOdmp2reEfib5E+NgcZkB9sHLmmSf4aLaT/FvEfLw2+4Heno7DRWEBuQY8ZzRn/LxmdEf5b4p3kYeHTgb7wEL0j2I"></div>

```vue
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const positions = ref([]);
  function pop({ x, y }) {
    positions.value.push({ left: `${x}px`, top: `${y}px` });
  }
  const remove = (e) => e.target.remove();
  onMounted(() =>
          document.addEventListener('click', pop));
  onUnmounted(() =>
          document.removeEventListener('click', pop));
</script>
```

</div>

<div class="fragment fade-in-then-out">

* Déclarer les props avec `defineProps()`

<div data-external-example="https://play.vuejs.org/#eNp9kkGP0zAQhf/KyEJKKhX3AKeQIljUAwjBCjggbZA2m0y63k1sy3ZCqij/nbHTpukKNSd73svzjP0N7KPWvGuRJSy1hRHagUXX6veZFI1WxsEABisYoTKqgYis0SzRvzetc0oeRb6ZKz4zepfJQknrQCsrnKAlbH1afPdnRVqpirZB6XhelruOFl+FdSjRxFFRi+I5WkM89Gs4jCvYUkMQvjmLd3ndItetfYwHqLFyCdy/GvpR9/drcEqH7cFvYVz5A9PNNCJl0cZho+vc4TE5PU/Tva6U2WbsdBQIeT42Y5CcNgsPlTeUlG4WsWzNnKUbqMSeP1kl6ZIHf1jGCtVoUaP5ro+ZCQTFa3ldq79fQs2ZFtenevGIxfN/6k+297WM3Rq0aDrM2Ky53OzRTfLu5zfsaT2LjSrbmtxXxB9oVd1O83nbTStLanvhC91+DjwIuf9ldz09oT0N5Rv1zjH4M0ZUfLoy+rndN/xt+C+TI93iBVbXUC2xEhJvjdL2AtkziUHaLo3xXXR6xChwOTkNNqpDssbo8QPkU3d8EuIXQF3ilD5MJCXWHWr0mPiT+AKWDwFxbolTkqfMjB1Z/J1upoCXRKUhjxbH/GHmMoH8IbwV+kujxoKRjf8ATaJV+Q=="></div>

```vue
<script setup>
import { defineProps } from 'vue';
const props = defineProps(['position']);
const remove = (e) => e.target.remove();
</script>
<template>
  <button :style="props.position" @click.stop="remove">
    X</button>
</template>
<style>
button { position: absolute }
</style>
```

</div>

<div class="fragment fade-in-then-out">

* Les composants importés sont automatiquement enregistrés localement

<div data-external-example="https://play.vuejs.org/#eNp9kkGP0zAQhf/KyEJKKhX3AKeQIljUAwjBCjggbZA2m0y63k1sy3ZCqij/nbHTpukKNSd73svzjP0N7KPWvGuRJSy1hRHagUXX6veZFI1WxsEABisYoTKqgYis0SzRvzetc0oeRb6ZKz4zepfJQknrQCsrnKAlbH1afPdnRVqpirZB6XhelruOFl+FdSjRxFFRi+I5WkM89Gs4jCvYUkMQvjmLd3ndItetfYwHqLFyCdy/GvpR9/drcEqH7cFvYVz5A9PNNCJl0cZho+vc4TE5PU/Tva6U2WbsdBQIeT42Y5CcNgsPlTeUlG4WsWzNnKUbqMSeP1kl6ZIHf1jGCtVoUaP5ro+ZCQTFa3ldq79fQs2ZFtenevGIxfN/6k+297WM3Rq0aDrM2Ky53OzRTfLu5zfsaT2LjSrbmtxXxB9oVd1O83nbTStLanvhC91+DjwIuf9ldz09oT0N5Rv1zjH4M0ZUfLoy+rndN/xt+C+TI93iBVbXUC2xEhJvjdL2AtkziUHaLo3xXXR6xChwOTkNNqpDssbo8QPkU3d8EuIXQF3ilD5MJCXWHWr0mPiT+AKWDwFxbolTkqfMjB1Z/J1upoCXRKUhjxbH/GHmMoH8IbwV+kujxoKRjf8ATaJV+Q=="></div>

```vue [3, 10]
<script setup>
  import { ref } from 'vue'
  import AppButton from './AppButton.vue';
  const positions = ref([]);
  document.addEventListener('click', ({ x, y }) =>
          positions.value.push({ left: `${x}px`, top: `${y}px` }));
</script>

<template>
  <AppButton v-for="position in positions" :position="position" />
</template>
```

</div>

<div class="fragment fade-in">

* Avantage
  * Meilleure lisibilité du code
  * Gabarits compilés en avance
  * Style avec portée limitée au composant
  * Enregistrement des composants automatique et optimisé 
* Inconvénients
  * Phase de compilation obligatoire

</div>

</div>
