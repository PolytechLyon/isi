### Typage dynamique
* Typage faible, aucune déclaration de type
* Le type peut varier au cours de l'exécution

```javascript
let x = 1;
console.log(typeof x);  // number
x = 'one';
console.log(typeof x);  // string
x = [1, 2, 3];
console.log(typeof x);  // object
x = { a: 1, b: 2, c: 3 };
console.log(typeof x);  // object
```
