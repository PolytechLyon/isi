### Auto-référence

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Les *fonctions fléchées* capturent l'autoréférence `this` du contexte où elles sont déclarées
    * `this` figé à la déclaration
* L'autoréférence des *fonctions classiques* dépend du contexte
    * `this` dynamique lors de l'appel

</div>

<div class="fragment" data-fragment-index="1">

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
