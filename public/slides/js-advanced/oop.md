### L'Orienté Objet

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1" style="margin: inherit">

Rappel
* **Les principes de la programmation orientée objet**
  * **Encapsulation**
  * **Héritage**
  * **Polymorphisme**

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1" style="margin: inherit">

En JavaScript
* **Les principes de la programmation orientée objet**
  * **Encapsulation** : les propriétés et les méthodes 
  * **Héritage** : la chaîne de prototype
  * **Polymorphisme** : la redéfinition des propriétés
</div>

<div class="fragment fade-in" data-fragment-index="2">


```javascript []
function Rectangle(x, y) { this.x = x; this.y = y; }
Rectangle.prototype = {
  area() { return this.x * this.y; },
  toString() { return `[${this.x} * ${this.y}]`; },
};
function Square(x) { Rectangle.call(this, x, x); }
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.toString = function() { return `[${this.x}²]`; };
const shapes = [new Rectangle(2, 3), new Square(2)];
for (const shape of shapes) {
  console.log(shape.toString(), shape.area());
}
```

<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="3">

* `Square` hérite de `Rectangle`
* Méthode polymorphique `toString()`

</div>
<div class="fragment fade-in" data-fragment-index="3">
Néanmoins, le code est difficile à maintenir !
</div>
</div>
</div>

</div>
