### Langage orienté objet
* Support de POO basé sur les **prototypes**
* On peut créer des objets sans classes
* Permet la programmation procédurale

```javascript
const rectangle = {
  heigh: 30,
  width: 60,
  transpose() {
      const width = this.heigh;
      this.heigh = this.width;
      this.width = width;
  }
}
```



