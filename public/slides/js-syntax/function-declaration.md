### Les fonctions

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Déclaration avec le mot clé `function`

```javascript
function f() {
    console.log('Hello world');
}

f();                        // on appel la fonction
```

</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

* Une fonction peut prendre une liste des paramètres

```javascript
function f(a, b) {
    console.log(a + b);
}

f(1, 2);                    // appel avec paramètres
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Une fonction peut retourner une valeur

```javascript
function f(a, b) {
    return a + b;
}

const sum = f(1, 2);        // appel et affectation
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

* Une fonction peut être déclarée avec une expression, et affectée à une variable

```javascript
const f = function(a, b) {
    return a + b;
}

const sum = f(1, 2);        // appel (invocation)
```

</div>
<div class="fragment fade-in-then-out" data-fragment-index="4">

* La déclaration est hissée en haut de la portée

```javascript fix
const sum = f(1, 2);        // appel avant la déclaration possible
function f(a, b) {
    return a + b;
}
```

* Ce n'est pas le cas pour l'expression de fonction

```javascript fix
const f = function(a, b) {
    return a + b;
}
const sum = f(1, 2);        // appel uniquement après déclaration
```

</div>

<div class="fragment">

* Les **fonctions fléchées** : Syntaxe simplifiée
* Permet d'écrire une fonction sur une seule ligne
    ```javascript
    const f = (a, b) => a + b;
    const sum = f(1, 2);
    ```
* Ou non
    ```javascript
    const f = (a, b) => {
      return a + b;
    }
    ```
</div>

</div>
