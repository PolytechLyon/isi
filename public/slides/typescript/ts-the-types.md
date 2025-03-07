### Les types

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

Types primitifs
* string
* number
* boolean

```typescript
const message: string = "Hello";
const order: number = 42;
const secure: boolean = true;
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="1">

Types union
* Syntax : type1 `|` type2

```typescript
let width: string | number = "12px";
width = 24;
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="2">

Types littéraux
* Une valeur peut aussi être un type
* Y compris `undefined` et `null`
* Souvent utilisés avec des types union

```typescript has-error[3,6] no-numbering
let color: 'red' | 'green' | 'blue' = 'red';
color = 'green';
color = 'yellow';
let answer: 42 | undefined;
answer = 42;
answer = 13;
```

</div>

<div class="fragment fade-in-then-out" data-fragment-index="3">

Types fonction

```typescript
function add(x: number, y: number): number {
    return x + y;
}

let operation: (a: number, b: number) => number = add;
operation = (x, y) => x * y;

const logger: (msg: string) => void = console.log;
```
</div>

<div class="fragment fade-in-then-out" data-fragment-index="4">

Types tableaux

```typescript has-error[7] no-numbering
const words: string[] = ["Hello", "World"];
words[1] = "Univers";
const answers: number[] = [];
answers.push(42);

// Erreur
words.push(42);
```
</div>

<div class="fragment fade-in-then-out" data-fragment-index="5">

Types objet

```typescript
const message: { text: string, received: Date } = {
    text: "Hello",
    received: new Date(),
}
```
</div>

<div class="fragment fade-in-then-out" data-fragment-index="6">

Types optionnels

```typescript
const message: { text: string, received?: Date } = {
    text: "Hello",
}
message.received = new Date();
message.received = undefined;
```
</div>

<div class="fragment fade-in-then-out" data-fragment-index="7">

Types nommés

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 10px;">

<div>

Alias de type

```typescript
type Message = {
    text: string,
    order: number,
    received?: Date,
}

const message: Message = {
    text: "Hello",
    order: 0
};
```
</div>

<div>

Interface

```typescript
interface Message {
    text: string;
    order: number;
    received?: Date;
}

const message: Message = {
    text: "Hello",
    order: 0
};
```
</div>

</div>

</div>

<div class="fragment fade-in-then-out" data-fragment-index="8">

La classe en tant que type

```typescript
class Message {
    text: string;
    received?: Date;
    constructor(text: string) {
        this.text = text;
    }
}

const msg1: Message = new Message("Hello");
const msg2: Message = { text: "Hi", received: new Date() };
```
</div>


</div> <!-- .r-stack -->
