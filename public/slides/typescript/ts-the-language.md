### Le langage

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

~JavaScript~ **TypeScript**
* Haut niveau
* ~Interprété~ **Transpilé**
* ~Typage dynamique et faible~ **Typage fort et statique**
* Orienté objet
* Monothread

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Le code TypeScript est transpilé en code JavaScript
* Généralement, un code JavaScript valide est aussi un code TypeScript valide
* TypeScript ajoute un typage optionnel à JavaScript

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

Annotations de type
* Syntaxe : `:` suivi d'un type
* Elles sont supprimées du code JavaScript généré

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 10px;">

<div>

TypeScript

<div data-external-example="https://www.typescriptlang.org/play/?#code/MYewdgzgLgBAtgUwhAhgcwQLhtATgSzDRgF4YAiACQQBsaRyBuAKFElhFwBMFdswArnABGvUjAAsAJhZtoOBMAG4sMYSBA0EKMOKi4BCWeHkrgCfADcEXbABEUUBOLAIA7jAdOAFAEoWzEA"></div>

```typescript
const message: string = "Hello";
const order: number = 42;
const secure: boolean = true;
const received: Date = new Date();
```
</div>

<div>

JavaScript
```javascript
const message = "Hello";
const order = 42;
const secure = true;
const received = new Date();
```
</div>


</div>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

Vérification de type
* Le type d'une variable, déclaré ou inféré, est vérifié
* Le code est transpilé, mais une erreur est signalée

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 10px;">

<div>

TypeScript

<div data-external-example="https://www.typescriptlang.org/play/?ssl=4&ssc=30&pln=1&pc=1#code/DYUwLgBAHgXBB2BXAtgIxAJwgXggFgCYBuCAelIgBUBPABxAgBMBLgY2AEMNmAoUSajggBmAHQBGPBGkzp5KnQZI0mCAEt4AM2bceUIQCJCBkrLNkKAUQwYQiDD0G4DYySfMz512-Z48gA"></div>

```typescript[2,4] has-error no-numbering
let x: number = 42; // Type déclaré
x = "42";
let y = 3.14        // Type number inféré
y = "3.14";
```
</div>

<div>

JavaScript
```javascript
let x = 42; // Type déclaré
x = "42";
let y = 3.14; // Type number inféré
y = "3.14";
```
</div>


</div>

</div>

</div> <!-- .r-stack -->
