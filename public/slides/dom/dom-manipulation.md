### Manipulation


<div data-external-example="code/dom-simple-example/index.html"></div>

```html fix
<!DOCTYPE html>
<html lang="en">
  <head><meta charset="UTF-8"><title>DOM</title></head>
  <body>
    <h1 class="focus">Le modèle objet de document</h1>
    <main id="course">
      Le <span class="focus">DOM</span> est un <em>arbre</em>.
    </main>
  </body>
</html>
```

<div class="r-stack">

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Lecture par identifiant

```javascript fix
document.getElementById('course');      // main#course
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

* Lecture d'un élément par sélecteur : nom de balise

```javascript fix
document.querySelector('h1');           // h1.focus
```

</div>

<div class="fragment fade-in-then-out">

* Lecture d'un élément par sélecteur : nom de classe

```javascript fix
document.querySelector('.focus');       // h1.focus
```

</div>

<div class="fragment fade-in-then-out">

* Lecture d'ensemble d'éléments par sélecteur

```javascript fix
document.querySelectorAll('.focus');    // [h1.focus, span.focus]
```

</div>

<div class="fragment">

* Lecture et modification d'élément

```javascript fix
const el = document.querySelector('title');
const title = el.innerHTML;             // 'DOM'
el.innerHTML = 'Document Object Model'; // Title changes
```

</div>

</div>
