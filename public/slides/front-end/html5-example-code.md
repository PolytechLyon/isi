<pre><code
    data-trim
    data-noescape
    data-line-numbers="1-20|1-6,9-13,18-20|7-8|14-17"
    data-fragment-index="1">
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
 &lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Ma page web&lt;/title&gt;
  &lt;style&gt;
   body { background-color: linen; }
   h1 { color: maroon; }
  &lt;/style&gt;
 &lt;/head&gt;
 &lt;body&gt;
  &lt;h1&gt;Une page &lt;span id="adjective"&gt;...&lt;/span&gt;&lt;/h1&gt;
  &lt;script&gt;
   let i = 0;
   const adj = ['structurée', 'stylée', 'dynamique'];
   const el = document.getElementById('adjective');
   setInterval(() =&gt; el.innerText = adj[i++ % 3], 500);
  &lt;/script&gt;
 &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<div class="space-around">
    <span class="fragment" data-fragment-index="1" style="color: #e34c26">🧱 HTML</span>
    <span class="fragment" data-fragment-index="2" style="color: #264de4">🎨 CSS</span>
    <span class="fragment" data-fragment-index="3" style="color: #f0db4f">⚙️ JavaScript</span>
</div>
