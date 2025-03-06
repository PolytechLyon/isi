### Les chaînes caractères

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Une valeur de type `string` peut être créée en utilisant des simples quotes ou des doubles quotes.
```javascript
const hi = "Hi";
const hello = 'Hello';
console.log(hi);                         // Hi
console.log(hello);                      // Hello
console.log(typeof hi);                  // string
console.log(typeof hello);               // string
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Une valeur de type `string` peut être créée en utilisant l'accent grave
* Cette valeur fait office d'un *gabarit*, qui peut contenir d'autre expression
* Un gabarit peut s'étaler sur plusieurs lignes

```javascript [2-3]
const name = 'John';
const greeting = `Hello ${name},
Have a nice day.`;
console.log(greeting);
```

</div>

<div class="fragment">

* Les chaînes caractères sont immutables
* Différents opérations et opérateurs possibles

```javascript
const str = 'Hello World';
console.log(str + '!');             // Hello Word!
console.log(str.length);            // 11
console.log(str[4]);                // o
console.log(str.split(' '));        // ['Hello', 'World']
```

</div>

</div>
