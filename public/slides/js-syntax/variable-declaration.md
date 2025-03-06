### Déclaration de variable

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* `let` pour déclarer une variable
  * Avec ou sans initialisation

```javascript
let x = 0;
let obj;
obj = { taille: x++ };
```

</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

* `const` pour déclarer une variable lecture seule
  * Initialisation obligatoire

```javascript
const MAX = 10;
const message = 'Bonjour';
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* `var` ~pour déclarer une variable~
  * Déclaration hissée en haut de la portée  
  * Utilisation dépréciée

```javascript
x = 0;                      // Possible car déclaration hissée
var x;
var obj = { taille: x++ };    // Déclaration est initialisation
```

</div>

<div class="fragment" data-fragment-index="3">

* `let` a une portée du bloc
  ```javascript
  let i = 42;
  for (let i = 0; i < 3; i++);
  console.log(i);                 // 42
  ```
* ~`var`~ a une portée de fonction ou globale
  ```javascript
  var j = 42;
  for (var j = 0; j < 3; j++);
  console.log(j);                 // 3 
  ```

</div>

</div>
