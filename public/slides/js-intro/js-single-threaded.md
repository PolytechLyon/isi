### Non concurrent
* Un seul fil d'exécution par contexte global (realm)
* Appels asynchrones possibles
  * En utilisant des fonctions de rappel (callbacks)

```javascript fix
console.log('one');
setTimeout(() => console.log('two'), 0); // zéro attente
alert();     // appel bloquant, généralement déconseillé 
console.log('three');
```

<pre class="fragment"><code data-trim class="fix">
> one
  three
  two
</code></pre>



