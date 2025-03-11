### Les constructeurs

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Un constructeur est une fonction qui :
  * ne contient pas de retour explicite
  * prépare un objet spécial, référencé par `this`
* Nom en PascalCase, par convention

</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

* Un constructeur est appelé avec le mot-clé `new`
* Implicitement, un objet est créé et renvoyé
* `this` référence cet objet dans le constructeur

```javascript
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

const person = new Person('John', 'Smith');
```


</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Le constructeur a une propriété `prototype`
* Si objet, `prototype` sera assigné en tant que prototype de `this` au lieu de `Object.prototype`

```javascript []
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello ${this.name}`);
}
const person = new Person('John');
Person.prototype === Object.getPrototypeOf(person); // true
person.greet();                                     // Hello John 
```

</div>

</div>
