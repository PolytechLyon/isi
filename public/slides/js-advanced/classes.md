#### JavaScript
### Les classes

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="6">

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">
Une classe permet de réaliser l'orienté objet <br /> d'une manière plus simple
</div>

<ul class="r-stack fragment fade-in" data-fragment-index="1">

<li class="fragment fade-out" data-fragment-index="2">
Création avec le mot-clé <code>class</code>
</li>

<li class="fragment fade-in-then-out" data-fragment-index="2">
Déclaration d'une propriété commune
</li>

<li class="fragment fade-in-then-out" data-fragment-index="3">
Constructeur, sans ou avec paramètres
</li>

<li class="fragment fade-in-then-out" data-fragment-index="4">
Déclaration d'une méthode
</li>

<li class="fragment fade-in-then-out" data-fragment-index="5">
Héritage d'une autre classe
</li>

<li class="fragment fade-in-the-out" data-fragment-index="6">
Redéfinition d'une méthode
</li>

</ul>

</div>

<pre><code
    class="javascript language-javascript"
    data-trim
    data-noescape
    data-line-numbers="1-11|1|2|3,7|4|6|8"
    data-fragment-index="1">
class Rectangle {
  dimension = 2;
  constructor(x, y) { this.x = x; this.y = y; }
  area() { return this.x * this.y; }
}
class Square extends Rectangle {
  constructor(x) { super(x, x); }
  area() { return this.x * this.x; }
}
const rectangle = new Rectangle(2, 3);
const square = new Square(2);
</code></pre>
  
</div>

<div class="fragment" data-fragment-index="6">

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="7">
Syntaxe avancée
</div>

<ul class="r-stack fragment fade-in" data-fragment-index="7">

<li class="fragment fade-out" data-fragment-index="8">
Propriétés privées
</li>

<li class="fragment fade-in-then-out" data-fragment-index="8">
Accesseur des propriétés (opérateur <code>get</code> et <code>set</code>)
</li>

<li class="fragment fade-in" data-fragment-index="9">
Propriétés statiques
</li>

</ul>

</div>

<pre><code
    class="javascript language-javascript fix"
    data-trim
    data-noescape
    data-line-numbers="0|2|6,7|8"
    data-fragment-index="7">
class Person {
  #age;
  constructor(name, age) {
    this.#age = age; this.name = name;
  }
  get canDrive() { return Person.isAdult(this); }
  set age(value) { this.#age = value; }
  static isAdult(person) { return person.#age > 18; }
}
const p = new Person('Jean', 19);
console.log(p.canDrive);
</code></pre>

<pre><code
    class="javascript language-javascript fix error fragment fade-in-then-out"
    data-trim
    data-noescape
    data-line-numbers
    data-fragment-index="7">
p.#age;    // Error: Expected identifier but found "#age"
</code></pre>
</div>


</div>
