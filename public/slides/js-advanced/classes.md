### Les classes

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="7">

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">
Une classe permet de réaliser l'orienté objet <br /> d'une manière plus simple
</div>

<ul class="r-stack fragment fade-in" data-fragment-index="1">

<li class="fragment fade-out" data-fragment-index="2">
Création avec le mot-clé <code>class</code>
</li>

<li class="fragment fade-in-then-out" data-fragment-index="2">
Déclaration d'une propriété
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
    data-line-numbers="|1|2|3,8|4,5|7|10"
    data-fragment-index="1">
class Rectangle {
  dimension = 2;
  constructor(x, y) { this.x = x; this.y = y; }
  area() { return this.x * this.y; }
  toString() { return `[${this.x} * ${this.y}]`; }
}
class Square extends Rectangle {
  constructor(x) { super(x, x); }
  area() { return this.x * this.x; }
  toString() { return `[${this.x}²]`; }
}
const shapes = [new Rectangle(2, 3), new Square(2)];
[new Rectangle(2, 3), new Square(2)].forEach(shape =>
    console.log(shape.toString(), shape.area()));
</code></pre>
  
</div>

<div class="fragment" data-fragment-index="7">

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="8">
Syntaxe avancée
</div>

<ul class="r-stack fragment fade-in" data-fragment-index="8">

<li class="fragment fade-out" data-fragment-index="9">
Propriétés privées
</li>

<li class="fragment fade-in-then-out" data-fragment-index="9">
Accesseur des propriétés (opérateur <code>get</code> et <code>set</code>)
</li>

<li class="fragment fade-in" data-fragment-index="10">
Propriétés statiques
</li>

</ul>

</div>

<pre><code
    class="javascript language-javascript fix"
    data-trim
    data-noescape
    data-line-numbers="0|2|6,7,11|8"
    data-fragment-index="8">
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

<pre class="error fragment fade-in-then-out" data-fragment-index="8"><code
    class="javascript language-javascript fix has-error"
    data-trim
    data-noescape
    data-line-numbers="1"
    data-line-numbers>
p.#age;    // Error: Expected identifier but found "#age"
</code></pre>
</div>


</div>
