### Les fonctions fléchées

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Syntaxe simplifiée
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

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Elles *capturent* l'autoréférence `this` de là où elles étaient déclarées
  * `this` figé à la déclaration
* L'autoréférence des fonctions classiques dépend du contexte
  * `this` dynamique lors de l'appel

</div>

<div class="fragment">

```javascript
this.x = 'outer x'
const obj = {
    x: 'inner x',
    f: function () { console.log(this.x); }, // fonction classique
    g: () => console.log(this.x)             // fonction fléchée
}
obj.f()         // inner x (this est obj) 
obj.g()         // outer x (this est le this global)
obj.f.call()    // outer x (this est le this global ici)
obj.g.call()    // outer x (this est le this global, toujours)
```
</div>

</div>
