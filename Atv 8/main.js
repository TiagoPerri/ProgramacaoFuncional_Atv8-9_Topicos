const fs = require('fs');
const { DOMParser } = require('xmldom');
const R = require('ramda');

const { isValid, elementsToArray, getGitHubProject } = require('./xmlfilter');

// efetua o processamento do xml e armazena a estrutura no objeto 'document'
const document = new DOMParser().parseFromString(fs.readFileSync('res/f-droid.xml', 'utf-8'));

const isAddedAfter2018AndUpdatedAfter2019 = isValid(R.__, 2018, 2019);

const addedApps = elementsToArray(document.getElementsByTagName('application'))
    .filter(isAddedAfter2018AndUpdatedAfter2019)
    .map(getGitHubProject);

console.log(addedApps.join('\n'));
 
// (Exercício 1) Identifique todas as declarações de funções neste projeto
    // Adicione um comentário identificando-as

    // R: As declarações de funções identificadas dentro desse projeto são:
    // contentOfTag(), 
    // contentOfSource(), 
    // contentOfAdded(), 
    // contentOfUpdated(), 
    // contentOfID(), 
    // getGitHubProject(),
    // elementsToArray,
    // isValid(),
    // isAddedAfter2018AndUpdatedAfter2019();

    // (Exercício 2) Identifique quais funções no projeto possuem efeitos colaterais (side-effects)
    // Adicione um comentário identificando-as

    // R: A função que possue efeito colateral é a getGitHubProject();