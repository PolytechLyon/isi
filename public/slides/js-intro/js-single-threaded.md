### Exécution monothread
* Un seul fil d'exécution par agent
* Tâches traitées complètement et sans interruption
* Appels asynchrones possibles
  * En utilisant des fonctions de rappel (callbacks)

```javascript fix
console.log('one');
setTimeout(() => console.log('two'), 0); // délai nul
alert();     // appel bloquant, généralement déconseillé 
console.log('three');
```

<pre class="fragment"><code data-trim class="fix">
> one
  three
  two
</code></pre>


<aside class="notes">

  * Run-to-completion

</aside>



