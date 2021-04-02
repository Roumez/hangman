const readline = require('readline-sync')
const chalk = require('chalk')


while (!gameOver) {
  const choixLetter = readlineSync.question('Quelle est votre lettre ?')

  if (choixLetter === words) {
    //Découvrir la lettre dans le mot
  } else {
    //afficher le pendu et le nombre d’essai
  }
}

