### Langage orienté objet
* Programmation orientée objet basée sur les **prototypes**
* Non classique : on peut créer des objets sans classe
* Non pur : permet la programmation procédurale

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



