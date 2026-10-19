### Prise en charge de TypeScript

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

Étant donné les types suivants

<div data-external-example="https://play.vuejs.org/#eNqFU39r2zAQ/SqHGcQBTxl07A/XCVtHYBvtVtoyBnVZXeecurUtIcmZQ/B330mKf6SENhBj3b17en562nlfhGCbGr3Qi1Qqc6GhSKr1PPa0ij1QqGuxiKu8FFxq2IHELAC9FQhXmEELmeQlTIhgctqjbHsHl1zlOudVj2Iz01EjJG1+VmtNmA7RV4wog0x5pTSIPZcKzb5RR317t4C50eTf3k0JvOJpXWKlWbJaLTf0cp4rjRVKf5IWefo8CcAXIVzwWqHtT2G+GMjZJilqZKJWj76YGsJo5kwhC2ihsRRFopFWQL9okL95n3FJpvkdVwDPuJ1CXg3sZGfYLSCkNsyIKJqNWL2AbKcvzvI1e1K8olPZmb1iL+WlyAuUv8SeKwTbMb2kKPi/H7amZY1BV08fMX0+Un9SjanF3qVEhXKDsdf3dCLXqF17ef0TG3rvmyVf1QWhX2leoeJFbTQ62FldrUj2CGfVfrfnn1frG7Vs6IRU91FGqEG2Fh97lIKvr3z6IPeEfbRzcdWSiwcxeiPbAMdzG8C13hZ4LL4ALpa7/nQJNYcVZnmFl5ILFQ2tcHQTFr5JVTeuDH+432ZObAVmOoT7d7tuljWtaO7pxnGK7bi+NXVoR2QSS74xND5RDuH2kTmTIFHw7ebifFmguSJT5gasoFHMD0MePbh8h1YqfLa3iCmSQy46gthb/IlmDvcyz5Eds0x7orEtyYPNCjlsFViouQHGZaYVHRs2w8H0JpJRsTSUTQhVXT6gDNx6e7Amb+hp/mOW3ms30hvuBq3ZrtM5/qLRnpLCv1r9RmkySxo/sQ/sxGv/A6US0gk="></div>

```typescript
// types.ts
export type Position = {
  x: number,
  y: number,
};

export type Style = {
  left: `${number}px`,
  top: `${number}px`,
};
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

L'attribut `lang="ts"` de `<script>` dans le SFC permet d'utiliser TypeScript dans le code

<div data-external-example="https://play.vuejs.org/#eNqFU39r2zAQ/SqHGcQBTxl07A/XCVtHYBvtVtoyBnVZXeecurUtIcmZQ/B330mKf6SENhBj3b17en562nlfhGCbGr3Qi1Qqc6GhSKr1PPa0ij1QqGuxiKu8FFxq2IHELAC9FQhXmEELmeQlTIhgctqjbHsHl1zlOudVj2Iz01EjJG1+VmtNmA7RV4wog0x5pTSIPZcKzb5RR317t4C50eTf3k0JvOJpXWKlWbJaLTf0cp4rjRVKf5IWefo8CcAXIVzwWqHtT2G+GMjZJilqZKJWj76YGsJo5kwhC2ihsRRFopFWQL9okL95n3FJpvkdVwDPuJ1CXg3sZGfYLSCkNsyIKJqNWL2AbKcvzvI1e1K8olPZmb1iL+WlyAuUv8SeKwTbMb2kKPi/H7amZY1BV08fMX0+Un9SjanF3qVEhXKDsdf3dCLXqF17ef0TG3rvmyVf1QWhX2leoeJFbTQ62FldrUj2CGfVfrfnn1frG7Vs6IRU91FGqEG2Fh97lIKvr3z6IPeEfbRzcdWSiwcxeiPbAMdzG8C13hZ4LL4ALpa7/nQJNYcVZnmFl5ILFQ2tcHQTFr5JVTeuDH+432ZObAVmOoT7d7tuljWtaO7pxnGK7bi+NXVoR2QSS74xND5RDuH2kTmTIFHw7ebifFmguSJT5gasoFHMD0MePbh8h1YqfLa3iCmSQy46gthb/IlmDvcyz5Eds0x7orEtyYPNCjlsFViouQHGZaYVHRs2w8H0JpJRsTSUTQhVXT6gDNx6e7Amb+hp/mOW3ms30hvuBq3ZrtM5/qLRnpLCv1r9RmkySxo/sQ/sxGv/A6US0gk="></div>

```vue
// App.vue
<script lang="ts" setup>
  import { ref, type Ref } from 'vue';
  import type { Position } from './types';
  import AppButton from './AppButton.vue';
  const positions: Ref<Position[]> = ref([]);
  document.addEventListener('click', (p: MouseEvent) => positions.value.push(p));
</script>

<template>
  <AppButton v-for="(position, key) in positions" :position :key />
</template>
```

</div>

<div class="fragment fade-in-then-out">

`defineProps()` typé avec un type générique

<div data-external-example="https://play.vuejs.org/#eNqFU39r2zAQ/SqHGcQBTxl07A/XCVtHYBvtVtoyBnVZXeecurUtIcmZQ/B330mKf6SENhBj3b17en562nlfhGCbGr3Qi1Qqc6GhSKr1PPa0ij1QqGuxiKu8FFxq2IHELAC9FQhXmEELmeQlTIhgctqjbHsHl1zlOudVj2Iz01EjJG1+VmtNmA7RV4wog0x5pTSIPZcKzb5RR317t4C50eTf3k0JvOJpXWKlWbJaLTf0cp4rjRVKf5IWefo8CcAXIVzwWqHtT2G+GMjZJilqZKJWj76YGsJo5kwhC2ihsRRFopFWQL9okL95n3FJpvkdVwDPuJ1CXg3sZGfYLSCkNsyIKJqNWL2AbKcvzvI1e1K8olPZmb1iL+WlyAuUv8SeKwTbMb2kKPi/H7amZY1BV08fMX0+Un9SjanF3qVEhXKDsdf3dCLXqF17ef0TG3rvmyVf1QWhX2leoeJFbTQ62FldrUj2CGfVfrfnn1frG7Vs6IRU91FGqEG2Fh97lIKvr3z6IPeEfbRzcdWSiwcxeiPbAMdzG8C13hZ4LL4ALpa7/nQJNYcVZnmFl5ILFQ2tcHQTFr5JVTeuDH+432ZObAVmOoT7d7tuljWtaO7pxnGK7bi+NXVoR2QSS74xND5RDuH2kTmTIFHw7ebifFmguSJT5gasoFHMD0MePbh8h1YqfLa3iCmSQy46gthb/IlmDvcyz5Eds0x7orEtyYPNCjlsFViouQHGZaYVHRs2w8H0JpJRsTSUTQhVXT6gDNx6e7Amb+hp/mOW3ms30hvuBq3ZrtM5/qLRnpLCv1r9RmkySxo/sQ/sxGv/A6US0gk="></div>

```vue
// AppButton.vue
<script lang="ts" setup>
  import type { Position, Style } from './types'
  const { position } = defineProps<{ position: Position }>();
  const style: Style = { left: `${position.x}px`, top: `${position.y}px` };
  const remove = (e: Event) => (e.target as HTMLElement).remove();
</script>
<template>
  <button :style @click.stop="remove">X</button>
</template>
<style>
  button { position: absolute }
</style>
```

</div>

</div>
