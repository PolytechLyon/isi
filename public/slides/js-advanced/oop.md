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
  dimension: 2,
  area() { return this.x * this.y; },
};
function Square(x) { this.x = x; }
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.area = function () { return this.x * this.x; };
const rectangle = new Rectangle(2, 3);
const square = new Square(2);
```

<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="3">

* `square` hérite de `rectangle`
* Méthode polymorphique `area()`

</div>
<div class="fragment fade-in" data-fragment-index="3">
Le code est difficile à maintenir !
</div>
</div>
</div>

</div>
