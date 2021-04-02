# Hangman game 

- interface avec users: `readline-sync` verification si la lettre tapé est dans le mot
- game loop: while tant que pas game over
- un dictionnaire, avec mots lignes par lignes, pour lire `readFileSync` le split fs.api
- random pour recup un mot au hasard
```js
const {randomInt } = require('crypto')
const words = ['coucou', 'toto']
const n = randomInt (0, words.length)
console.log(random)
```

- compter points / tentatives (dessiner en asccii un pendu: )
- comparer la letter en upper case ou lower case
- interface color
- fichier de high score  _score.json_
```Json
{
  "Alice": 100
}
```


- check accès au fichier readline et highscore
- une phase d’initialisation (check, recup l’high Score)

un pendu lance sur console et joue 
lui demande une lettre à entrer 
si true affiche le mot completer
si false dessiner un pendu 

des mots différents à trouver
When winner msg de félicitations
if lose msg de loose play again

- programme modulaire: modules (exports / require)