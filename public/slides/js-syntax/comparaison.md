### Les comparaisons

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Test d'égalité de valeur avec `==`
* Test d'égalité stricte (valeur et type) avec `===`
```javascript fix
console.log(42 == '42');           // true 
console.log(42 === '42');          // false
console.log(42 === 42);            // true
console.log('42' === '42');        // true
console.log(null == undefined);    // true
console.log(null === undefined);   // false
console.log('' == false);          // true
console.log('' === false);         // false
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Test d'inégalité de valeur avec `!=`
* Test d'inégalité stricte (valeur ou type) avec `!==`
```javascript fix
console.log(42 != '42');           // false 
console.log(42 !== '42');          // ture
console.log(42 !== 42);            // false
console.log('42' !== '42');        // false
console.log(null != undefined);    // false
console.log(null !== undefined);   // true
console.log('' != false);          // false
console.log('' !== false);         // true
```

</div>

<div class="fragment">

* Comparaison d'inégalité `<`, `>`, `<=`, `>=`
* Entre deux chiffres ou deux chaînes de caractères

```javascript fix
console.log(42 > 13);                    // true 
console.log(42 >= '42');                 // true
console.log(42 > NaN);                   // false
console.log(NaN > 42);                   // false
console.log('Jack' < 'Jacques');         // true
console.log(false < true)                // true
```

</div>

</div>
