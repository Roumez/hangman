const { randomInt } = require('crypto')
//array of words
const words = ['secondes', 'collection', 'accalmie', 'ouvrir', 'ecrire',
  'reponse', 'cologne', 'aspire', 'velo', 'hippie', 'vert',
  'depasser', 'journalistes', 'pinocchio', 'script', 'pollen']

  // Choose random word
  const wordToFind = () => {
  const n = randomInt(0, words.length)
  let choosenWord = words[n].toLowerCase()
  // console.log(choosenWord)
  // create an array of word 
  let word = []
  for (i = 0; i < choosenWord.length; i++) {
    word.push(` ${choosenWord[i]} `)
  }
  // console.log(word)
  // create underscore based on length of word
  let underscore = []
  for (let i = 0; i < choosenWord.length; ++i) {
    underscore.push('_');
  }
  return [word, underscore]
  // console.log(underscore)
}

exports.wordToFind = wordToFind
