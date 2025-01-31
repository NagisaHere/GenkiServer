const Conjugator = require('jp-verbs');

let result = Conjugator.unconjugate('言われてみれば');
console.log(JSON.stringify(result, null, 2));