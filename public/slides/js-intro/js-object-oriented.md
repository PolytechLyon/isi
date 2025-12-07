### Langage orienté objet
* Support de POO basé sur les **prototypes**
* On peut créer des objets sans classes
* Permet la programmation procédurale

```javascript
const rectangle = {
  height: 30,
  width: 60,
  transpose() {
      const width = this.height;
      this.height = this.width;
      this.width = width;
  }
}
```



