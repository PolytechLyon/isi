### Structures de contrôle

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Structure conditionnelle `if`

```javascript
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
if (day === 1 && month === 0) {
    console.log('Happy new year!');
}
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Structure conditionnelle `if`-`else`

```javascript
const date = new Date();
const hour = date.getHours();
if (hour > 12) {
    console.log('Good morning.');
} else {
    console.log('Good evening.');
}
```
</div>

<div class="fragment fade-in-then-out" >

* Structure conditionnelle `switch`

```javascript
switch (new Date().getDay()) {
    case 6, 0:
        console.log('Weekend');
        break;
    case 5:
        console.log('It\'s Friday, almost there');
        break;
    default:
        console.log('Business as usual');
}
```

</div>

<div class="fragment fade-in-then-out" >

* Structure de boucle `for`

```javascript
let x = 0;
for (let i = 0; i < 10; i++) {
    x += i;
}
console.log(x);     // 45
```

</div>


<div class="fragment fade-in-then-out" >

* Structure de boucle `for-of`
  * Itérer sur un tableau (ou autre itérables)

```javascript
const colors = ['Red', 'Green', 'Blue'];
for (let color of colors) {
    console.log(color);
}
```

</div>

<div class="fragment fade-in-then-out" >

* Structure de boucle `for-in`
    * Itérer les propriétés (énumérables) d'un objet

```javascript
const color = { red: 114, green: 139, blue: 178 };
for (let component in color) {
    console.log(`${component}: ${color[component]}`);
}
```

</div>

<div class="fragment fade-in-then-out" >

* Structure de boucle `while`

```javascript
let i = 0, x = 0;
while (i < 10) {
    x += i;
    i++;
}
console.log(x);     // 45
```

</div>

<div class="fragment fade-in-then-out" >

* Structure de boucle `do-while`

```javascript
let i = 0, x = 0;
do {
    x += i;
} while (++i < 10);
console.log(x);     // 45
```

</div>

<div class="fragment" >

* `break` et `continue` dans une boucle 

```javascript
const reservations = { a: 3, b: 0, c: 5, d: 4, e: 2, f: 1 };
let available = 10;
for (let res in reservations) {
    const places = reservations[res];
    if (!places || available - places < 0) {
        continue;
    }
    available -= places;
    console.log(`${res} booked ${reservations[res]} place(s)`);
    if (!available) {
        break;
    }
}
```

</div>

</div>
