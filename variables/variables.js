'use strict';

const madLib1 = 'The [ADJECTIVE] brown [ANIMAL] [PAST_VERB] [PREPOSITION] the lazy [PLURAL_ANIMAL].'

// fill out these words to complete the mad lib!
const adjective1 = 'quick'
const animal1 = 'fox'
const pastVerb1 = 'jumped'
const preposition1 = 'over'
const plural_animal1 = 'dogs'

function completeMadLib(madLib, words) {
  const fillInRegex = /\[[A-Za-z0-9_\-]+\]/;
  return madLib.split(' ').map((word, index) => {
    if (fillInRegex.test(word)) {
      return word.replace(fillInRegex, words.shift());
    } else {
      return word;
    }
  }).join(' ');
}

function displayMadLib(string) {
  document.querySelector('#mad-lib-1').textContent = string;
}

displayMadLib(completeMadLib(madLib1, [adjective1, animal1, pastVerb1, preposition1, plural_animal1]))
