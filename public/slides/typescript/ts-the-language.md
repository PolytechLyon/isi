### Le language

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

~JavaScript~ **TypeScript**
* Haut niveau
* ~Interprété~ **Transpilé**
* ~Typage faible et dynamique~ **Typage fort et statique**
* Orienté-objet
* Non concurrent

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Le code TypeScript transpile en code JavaScript
* Généralement, un code JavaScript valide est aussi un code TypeScript valide
* TypeScript ajoute un typage optionnel à JavaScript

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

Annotations de type
* Syntax : `:` suivit d'un type
* Elles seront supprimées dans le code JavaScript

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 10px;">

<div>

TypeScript

<div data-external-example="https://www.typescriptlang.org/play/?ssl=4&ssc=35&pln=1&pc=1#code/MYewdgzgLgBGC2BTCECGBzRAuG0BOAlmOjALwwBEAEogDa0gUDcAUKJLCHgCaJ45gArvABGfMjAAsAJlbtouRMEF5sMESBC1EqMBKh5BiOeAWrgiAgDdE3HABFUURBLCIA7jEfOAFAEpWFiA"></div>

```typescript
const nmessage: string = "Hello";
const order: number = 42;
const secure: boolean = true;
const received: Date = new Date();
```
</div>

<div>

JavaScript
```javascript
const nmessage = "Hello";
const order = 42;
const secure = true;
const received = new Date();
```
</div>


</div>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

Vérification de type
* Le type de variable, déclaré ou inféré, sera vérifié
* TypeScript compile, mais génère une erreur

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 10px;">

<div>

TypeScript

<div data-external-example="https://www.typescriptlang.org/play/?ssl=4&ssc=30&pln=1&pc=1#code/DYUwLgBAHgXBB2BXAtgIxAJwgXggFgCYBuCAelIgBUBPABxAgBMBLgY2AEMNmAoUSajggBmAHQBGPBGkzp5KnQZI0mCAEt4AM2bceUIQCJCBkrLNkKAUQwYQiDD0G4DYySfMz512-Z48gA"></div>

```typescript[3-4] has-error no-numbering
let x: number = 42; // Type déclaré
let y = 3.14        // Type number inféré
x = "42";           // Erreur
y = "3.14";         // Erreur
```
</div>

<div>

JavaScript
```javascript
let x = 42; // Type déclaré
let y = 3.14; // Type number inféré
x = "42"; // Erreur
y = "3.14"; // Erreur
```
</div>


</div>

</div>

</div> <!-- .r-stack -->
