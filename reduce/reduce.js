const { alunos } = require('./reduceData');
const { log } = require('./../helpers.js');

const toNames =  n => ({nome:n}) 

var nomes = alunos
.reduce(function(arrayNomes, aluno) {
    arrayNomes.push(aluno.nome);
    return arrayNomes;
}, [])
.map(toNames);

log(nomes);