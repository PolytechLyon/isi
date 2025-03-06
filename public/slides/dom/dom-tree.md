### Arborescence

<div style="display: flex; justify-content: space-between">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>DOM</title></head>
  <body>
    <h1 class="focus">
        Le modèle objet de document
    </h1>
    <main id="course">
      Le <span class="focus">DOM</span>
      est un <em>arbre</em>.
    </main>
  </body>
</html>
```

``` no-min-width

html
├ head
│ ├ meta[charset="UTF-8"]
│ └ title
└ body
  ├ h1.focus
  │
  │
  └ main#course
    ├ span.focus
    └ em
```

</div>
