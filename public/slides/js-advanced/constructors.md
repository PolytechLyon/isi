#### JavaScript
### Les constructeurs

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Un constructeur est une fonction qui :
  * ne contient pas de retour explicite
  * prépare un objet spécial, `this`
* Nom en PascalCase, par convention

<img class="r-stretch"></img>


</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

* Un constructeur est appelé avec le mot-clé `new`
* Implicitement, un objet `this` est créé au début de l'exécution, et envoyé au code appelant à la fin

```javascript
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

const person = new Person('John', 'Smith');
```


</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Le constructeur a une propriété `prototype`, dont la valeur est un objet
* Cet objet est assigné en tant que prototype de `this`

```javascript []
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello ${this.name}`);
}
const person = new Person('John', 'Smith');
Person.prototype === Object.getPrototypeOf(person); // true
person.greet();                                     // Hello John 
```

</div>

</div>
