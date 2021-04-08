const fs = require('fs')
const readline = require('readline-sync')
let { wordToFind } = require('./dico')
const chalk = require('chalk')

// condition pour jouer, le nb d’essai, les lettres utilisés, le mot à trouver
  let gameOver = false
  let life = 0
  let tried = []
  let [word, underscore] = wordToFind()

// loop tant que l’on est pas game over
while (!gameOver) {
// choix utilisateur pour deviner une lettre 
  const userChoice = readlineSync.question('Guess a letter ?')
  const letter = userChoice.toLowerCase()
  tried.push(letter)
// Verifier si la lettre est dans notre mot
  for (let i = 0; i < word.length; ++i){
    if (word[i] === letter){

    }
  }
}