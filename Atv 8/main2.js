const fs = require('fs');
const { DOMParser } = require('xmldom');
const R = require('ramda');

const { isValid, elementsToArray, contentOfName, contentOfAdded, contentOfUpdated } = require('./xmlfilter');

// efetua o processamento do xml e armazena a estrutura no objeto 'document'
const document = new DOMParser().parseFromString(fs.readFileSync('res/f-droid.xml', 'utf-8'));

const isAddedAfter2000AndUpdatedAfter2020 = isValid(R.__, 2000, 2020);

const addedApps = elementsToArray(document.getElementsByTagName('application')).filter(isAddedAfter2000AndUpdatedAfter2020).map((app) =>{
        console.log("Nome: "+contentOfName(app), "Data: "+contentOfAdded(app),"data da última atualização: "+contentOfUpdated(app));
    });
        
console.log(addedApps.join('\n'));