### Typage dynamique et faible
* Typage dynamique : aucune déclaration de type, le type peut varier au cours de l'exécution
* Typage faible : conversions implicites entre types

```javascript
let x = 1;
console.log(typeof x);  // number
x = 'one';
console.log(typeof x);  // string
x = [1, 2, 3];
console.log(typeof x);  // object
x = { a: 1, b: 2, c: 3 };
console.log(typeof x);  // object
// Typage faible
console.log('1' + 1);   // 11
```
