### Support pour TypeScript

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

Étant donné les types suivants

<div data-external-example="https://play.vuejs.org/#eNqFU11r2zAU/SsXM4gDnvOwPblO2DoC22i30PZhUBfqONepG1sSkpw5BP/3XUnxR9rRBmKse849ujo6PnpfhQj3NXqRF6tMFkJDmbLtPPG0SjxQqGuxSFhRCS41HEFiHsAN5tBCLnkFE+qdjPAVV4UuOOvxcKYPAtXkoifRjpe11sTpGH3FTGKYGWdKgzhpqcjsGHfS9w8LmJtB/PuHKZE3PKsrZDpMN5vlnl6uCqWRofQnWVlku0kAvojgmtcKLT6F+WIQD/dpWWMoavXki6kRjGfOCTo3LTRWokw10groFw/j7z/mXJJTfqcVwA4PUyjYoE4eRt0CIoJhRkLxbKTqBeQ1nTgvtuGz4oyu4mj2SryMV6IoUf4WJ60ILGKwtCz535+2pmWNQVfPnjDb/af+rBpTS7yVRIVyj4nXYzqVW9QOXt7+wobee7Dim7ok9hvgDSpe1mZGR7us2YbGHvHstD/s/Rdse6eWDd2Q6g5lBjXM1vITj1Lw7Y2jD+N+Cj/bvoS15OJZjN4JNMCryAZwqw8lvkquIbtAHvt7JdIcNpgXDFeSCxUPUDT6Bha+yVPXrox8dNplTmol5jqCxw/HrjdsWtE8BqA5BXZcP5g6tCMxiRXfGxmfJIdY+xg6eyBV8P3u+mpZovk4pqFrsAONAn4e73jtkh3ZUeGL/X5CReOQf04g8RZ/4pnjvUxybNus0klobEu6tikhg+0Elmqyb0wOtaILw8ZeiakMJpJRiTSSTQSsrtYoA7c+nK1b8zD/sUhvtevo/XZ91muHdIa/ANoLr/0Hi+DFow=="></div>

```vue
// type.ts
export type Position = {
  x: number,
  y: number,
}

export type Style = {
  left: `${number}px`,
  top: `${number}px`,
};
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

L'attribut `lang="ts"` de `<script>` dans le SCF permet d'utiliser TypeScript dans le code

<div data-external-example="https://play.vuejs.org/#eNqFU11r2zAU/SsXM4gDnvOwPblO2DoC22i30PZhUBfqONepG1sSkpw5BP/3XUnxR9rRBmKse849ujo6PnpfhQj3NXqRF6tMFkJDmbLtPPG0SjxQqGuxSFhRCS41HEFiHsAN5tBCLnkFE+qdjPAVV4UuOOvxcKYPAtXkoifRjpe11sTpGH3FTGKYGWdKgzhpqcjsGHfS9w8LmJtB/PuHKZE3PKsrZDpMN5vlnl6uCqWRofQnWVlku0kAvojgmtcKLT6F+WIQD/dpWWMoavXki6kRjGfOCTo3LTRWokw10groFw/j7z/mXJJTfqcVwA4PUyjYoE4eRt0CIoJhRkLxbKTqBeQ1nTgvtuGz4oyu4mj2SryMV6IoUf4WJ60ILGKwtCz535+2pmWNQVfPnjDb/af+rBpTS7yVRIVyj4nXYzqVW9QOXt7+wobee7Dim7ok9hvgDSpe1mZGR7us2YbGHvHstD/s/Rdse6eWDd2Q6g5lBjXM1vITj1Lw7Y2jD+N+Cj/bvoS15OJZjN4JNMCryAZwqw8lvkquIbtAHvt7JdIcNpgXDFeSCxUPUDT6Bha+yVPXrox8dNplTmol5jqCxw/HrjdsWtE8BqA5BXZcP5g6tCMxiRXfGxmfJIdY+xg6eyBV8P3u+mpZovk4pqFrsAONAn4e73jtkh3ZUeGL/X5CReOQf04g8RZ/4pnjvUxybNus0klobEu6tikhg+0Elmqyb0wOtaILw8ZeiakMJpJRiTSSTQSsrtYoA7c+nK1b8zD/sUhvtevo/XZ91muHdIa/ANoLr/0Hi+DFow=="></div>

```vue
// App.vue
<script lang="ts" setup>
  import { ref, Ref } from 'vue'
  import { Position } from './types';
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

<div data-external-example="https://play.vuejs.org/#eNqFU11r2zAU/SsXM4gDnvOwPblO2DoC22i30PZhUBfqONepG1sSkpw5BP/3XUnxR9rRBmKse849ujo6PnpfhQj3NXqRF6tMFkJDmbLtPPG0SjxQqGuxSFhRCS41HEFiHsAN5tBCLnkFE+qdjPAVV4UuOOvxcKYPAtXkoifRjpe11sTpGH3FTGKYGWdKgzhpqcjsGHfS9w8LmJtB/PuHKZE3PKsrZDpMN5vlnl6uCqWRofQnWVlku0kAvojgmtcKLT6F+WIQD/dpWWMoavXki6kRjGfOCTo3LTRWokw10groFw/j7z/mXJJTfqcVwA4PUyjYoE4eRt0CIoJhRkLxbKTqBeQ1nTgvtuGz4oyu4mj2SryMV6IoUf4WJ60ILGKwtCz535+2pmWNQVfPnjDb/af+rBpTS7yVRIVyj4nXYzqVW9QOXt7+wobee7Dim7ok9hvgDSpe1mZGR7us2YbGHvHstD/s/Rdse6eWDd2Q6g5lBjXM1vITj1Lw7Y2jD+N+Cj/bvoS15OJZjN4JNMCryAZwqw8lvkquIbtAHvt7JdIcNpgXDFeSCxUPUDT6Bha+yVPXrox8dNplTmol5jqCxw/HrjdsWtE8BqA5BXZcP5g6tCMxiRXfGxmfJIdY+xg6eyBV8P3u+mpZovk4pqFrsAONAn4e73jtkh3ZUeGL/X5CReOQf04g8RZ/4pnjvUxybNus0klobEu6tikhg+0Elmqyb0wOtaILw8ZeiakMJpJRiTSSTQSsrtYoA7c+nK1b8zD/sUhvtevo/XZ91muHdIa/ANoLr/0Hi+DFow=="></div>

```vue
// AppButton.vue
<script lang="ts" setup>
  import { Position, Style } from './types'
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
