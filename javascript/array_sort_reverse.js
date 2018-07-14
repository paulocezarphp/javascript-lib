var nomes = ['Paulo','Carlos','Lucas','Antonio','Maria'];

function OrdemAlfabetica(){
    console.log(nomes.sort());
}

function OrdemReversa(){
    console.log(nomes.reverse());
}

function OrdemAlfabeticaReversa(){
    console.log(nomes.sort().reverse());
}

console.log('Ordem de declaração');
console.log(nomes);
console.log('Em ordem alfabetica');
OrdemAlfabetica();
console.log('Em ordem reversa a ordem de declaração');
OrdemReversa();
console.log('Ordem afabetica reversa');
OrdemAlfabeticaReversa();

