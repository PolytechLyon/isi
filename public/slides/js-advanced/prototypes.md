#### JavaScript
### Le prototype d'objet

<div class="r-stack">



<div class="fragment fade-out" data-fragment-index="1">

Un objet "vide" en JavaScript a déjà des propriétés.

Comment cela est-il possible ?

```javascript
const obj = {};
obj.toString(); // Cela marche !
```

</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">


* En JavaScript, chaque objet a un prototype
  * Le prototype est simplement un autre objet
  * Il peut être nul
  * Il a, en tant qu'objet, un prototype (peut-être nul)
* On parle de la **chaîne de prototype**


</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* La méthode `Object.getPrototypeOf()` détermine le prototype d'un objet

```javascript fix
const prototype = Object.getPrototypeOf({});
typeof prototype;           // object
typeof prototype.toString;  // function
```

* Le prototype peut être stocké dans la propriété `__proto__` *par convention*

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

* Lorsqu'une propriété est accédée, par sa clé, sur un objet, l'objet est d'abord cherché pour une propriété de la même clé
* Si une telle propriété n'est pas trouvée, la chaîne de prototype est cherché, en partant de l'objet même
* Jusqu'à ce qu'une propriété de la même clé soit trouvée, ou un prototype nul soit rencontrée


</div>

<div class="fragment fade-in-then-out" data-fragment-index="4">

* Lorsqu'un objet est créé avec la syntaxe de deux accolades, il est assigné un prototype spécial : `Object.prototype`
* Il contient les propriétés (méthodes) `toString()`, `valueOf()`, etc

```javascript
const obj = {};
Object.prototype.toString === obj.toString;     // true
obj.toString();
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="5">

* Deux propriétés ayant la même clé peuvent coexister dans la chaîne de prototype d'un objet
* C'est la valeur de la propriété la plus proche de l'objet qui sera prise en compte
* On parle de la **redéfinition des propriétés**

```javascript
const obj = {
  toString() { return "This is an object"; }
};
obj.toString();             // This is an object
```

</div>

<div class="fragment" data-fragment-index="6">

* La méthode `Object.create()` permet de créer un objet avec un prototype personalisé

```javascript
const prototypeless = Object.create(null);
prototypeless.toString;             // undefined

const Loggable = {
  log() {
    console.log(this.toString());
  },
};
const obj = Object.create(Loggable);
obj.log();                          // [object Object]
```

</div>

</div>
