## Fichiers séparés

<pre><code data-trim data-noescape data-line-numbers="1-4|2|3|4" data-fragment-index="1">
website/
    index.html
    style.css
    script.js
</code></pre>
<div class="r-stack">
    <pre class="fragment fade-in-then-out" data-fragment-index="1">
        <code data-trim data-noescape data-line-numbers>
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
 &lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Ma page web&lt;/title&gt;
  &lt;link rel="stylesheet" href="./style.css"&gt;
 &lt;/head&gt;
 &lt;body&gt;
  &lt;h1&gt;Une page &lt;span id="adjective"&gt;...&lt;/span&gt;&lt;/h1&gt;
  &lt;script src="./script.js"&gt;&lt;/script&gt;
 &lt;/body&gt;
&lt;/html&gt;
        </code>
    </pre>
    <pre class="fragment fade-in-then-out" data-fragment-index="2">
        <code data-trim data-noescape data-line-numbers>
body { background-color: linen; }
h1 { color: maroon; }
    </code></pre>
    <pre data-fragment-index="3" class="fragment">
        <code data-trim data-noescape data-line-numbers>
let i = 0;
const adjectives = ['structurée', 'stylée', 'dynamique'];
const el = document.getElementById('adjective');
setInterval(() => el.innerText = adjectives[i++ % 3], 1000);
        </code>
    </pre>
</div>
