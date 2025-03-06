### Les chiffres

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Les chiffres en JavaScript sont des réels (flottant) sur 8 octets (double précision)
* Chiffres spéciaux : `Infinity`, `NaN`
```javascript
console.log(1 / 0 === Infinity);     // true
console.log(0 / 0);                  // NaN
console.log(0 / 0 === NaN);          // false
console.log(NaN !== NaN);            // true
console.log(isNaN(0 / 0));           // true
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

* Le type BigInt est utilisé pour les grands entiers

```javascript fix
const x = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
console.log(x);                  // 9007199254740992n
console.log(typeof x);           // bigint
```

</div>

<div class="fragment">

* Opérateurs arithmétiques : `+`, `-`, `*`, `/`, `**`, etc.
  ```javascript fix
  const divisionReelle = 3 / 2;         // 1.5
  const exponentiation = 2 ** 3;        // 8
  ```
* Affectation : `++`, `--`, `+=`, `-=`, `*=`, `/=`, `**=`, etc.
  ```javascript fix
  let x = 1;
  ++x;                                  // 2
  ```

</div>

</div>
