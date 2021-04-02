const { randomInt } = require('crypto')

const words = ['secondes', 'collection', 'accalmie', 'ouvrir', 'ecrire',
  'reponse', 'cologne', 'aspire', 'velo', 'hippie', 'vert',
  'depasser', 'journalistes', 'pinocchio', 'script', 'pollen']

const n = randomInt(0, words.length)
console.log(`random words: ${words[n]}`)

//Show letters in the words
let answerArray = [];
for (let i = 0; i < words.length; i++) {
  answerArray[i] = '_'
}
