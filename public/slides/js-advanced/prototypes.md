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


* En JavaScript, chaque objet a un prototype :
  * qui est un autre objet,
  * qui peut être nul
* Un prototype non nul possède, en tant qu'objet, un prototype, possiblement nul
* On parle de la **chaîne de prototypes**


</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* L'accès à une propriété par sa clé commence par une recherche dans l'objet lui-même
* Si une telle propriété n'est pas trouvée, la chaîne de prototypes est parcourue
* Jusqu'à ce qu'une propriété de la même clé soit trouvée, ou qu'un prototype nul soit rencontré

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

* La méthode `Object.getPrototypeOf()` détermine le prototype d'un objet

```javascript fix
const prototype = Object.getPrototypeOf({});
console.log(typeof prototype);           // object
console.log(typeof prototype.toString);  // function
```

* L'accesseur historique `__proto__` donne ausso accès au prototype, mais son usage est déconseillé

</div>

<div class="fragment fade-in-then-out" data-fragment-index="4">

* Un objet créé avec `{}` a pour prototype `Object.prototype`
* Il contient les propriétés (méthodes) `toString()`, `valueOf()`, etc.

```javascript
const obj = {};
Object.prototype.toString === obj.toString;     // true
obj.toString();
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="5">

* Deux propriétés ayant la même clé peuvent coexister dans la chaîne de prototypes d'un objet
* La valeur de la propriété la plus proche de l'objet *masque* les autres, et sera seule prise en compte
* On parle de la **redéfinition des propriétés**

```javascript
const obj = {
  toString() { return "This is an object"; }
};
obj.toString();             // This is an object
```

</div>

<div class="fragment" data-fragment-index="6">

* La méthode `Object.create()` permet de créer un objet avec un prototype personnalisé

```javascript
const prototypeless = Object.create(null);
prototypeless.toString;             // undefined

const Loggable = {
  log() {
    console.log(this);
  },
};
const obj = Object.create(Loggable);
obj.log();                          // [object Object]
```

</div>

</div>
