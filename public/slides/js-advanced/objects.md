### Les objets

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Un objet est une collection de propriétés
  * Une propriété est une paire clé-valeur
  * La clé est une chaîne de caractères (ou symbole)
  * La valeur peut être de n'importe quel type
  * Une méthode est une propriété dont la valeur est une fonction


</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

* Syntaxe
  * L'objet est entouré par des accolades
  * Les propriétés sont séparées par des virgules
  * Le deux-points sépare la clé, ou nom, de la valeur

```javascript
const person = {
    name: 'John',
    greet: function () {
        console.log(`Hi, this is ${this.name}`);
    }
}
```


</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Syntaxe concise pour
  * Une propriété dont le nom et la valeur correspondent au nom et à la valeur d'une variable 
  * Une méthode

```javascript [3-4]
const name = 'John';
const person = {
    name,
    greet() {
        console.log(`Hi, this is ${this.name}`);
    }
};
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

* Les clés peuvent être dynamiques
  * Syntaxe entre crochets `[]`

```javascript [5,6]
const lang = 'fr';
const nameKey = lang === 'fr' ? 'nom' : 'name';
const greetKey = lang === 'fr' ? 'saluer' : 'greet';
const person = {
    [nameKey]: 'John',
    [greetKey]() {
        console.log(`Hi, this is ${this[nameKey]}`);
    }
}
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="4">

* Accès aux propriétés avec un point : clé statique
* Ou avec crochets : clé dynamique

```javascript [7-10]
const person = {
  name: 'John',
  greet() {
    console.log(`Hi, this is ${this.name}`);
  }
}
console.log(person.name);       // John
console.log(person['name']);    // John
person.greet();                 // Hi, this is John
person['greet']();              // Hi, this is John
```

</div>

<div class="fragment" data-fragment-index="5">

* Décomposition d'objet
* Les méthodes ne seront plus attachées à l'objet <!-- .element class="fragment" data-fragment-index="6" -->

<pre><code
  class="javascript language-javascript"
  data-trim
  data-noescape
  data-line-numbers="|12"
  data-fragment-index="6">
const person = {
  firstname: 'John',
  lastname: 'Smith',
  greet() {
    console.log(`Hi, this is ${this.firstname}`);
  },
}
const { firstname, lastname: surname, greet } = person;
console.log(firstname);         // John
console.log(surname);           // Smith
person.greet();                 // Hi, this is John
greet();                        // TypeError en mode strict
</code></pre>

</div>

</div>
