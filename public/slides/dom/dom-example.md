### Démo

<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="1">

<pre><code
    class="javascript language-javascript not-runnable"
    data-trim
    data-noescape
    data-line-numbers>
const body = document.querySelector('body');
document.addEventListener('click', pop);
function pop(event) {
    const x = event.x, y = event.y;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.addEventListener('click', e => {
        button.remove();
        e.stopPropagation();
    });
    body.append(button);
}
</code>
</pre>

</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">

```css
button { position: absolute; }
```

```html [8-10]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Buttons</title>
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
    <script src="./script.js"></script>
</body>
</html>
```

</div>
<div class="fragment">
Résultat

<div data-code-example="dom-manipulation-example" data-code-example-size="big"></div>

</div>

</div>
