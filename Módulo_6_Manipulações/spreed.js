let numeros = [1,2,3,4];
/*junção dos arrays */
let outros = [...numeros,5,6,7,8,];
console.log(outros);

let dados = {
    nome: 'Cloud',
    sobreNome:'Strife',
    idade: 26
}


/* junção de Objetos */
let novosDados = {
    cidade: 'Midgard',
    profissao: 'soldado',
}

let dadosCompletos = {
    ...dados,
    ...novosDados
}

console.log(dadosCompletos);

function novasInfos (info) {
     let novaInfo = {
        ...info,
        status: 'online',
        posicao: 'soldado'
    };
    return novaInfo
}   

let per3 = novasInfos({nome:'Cloud'})

console.log(per3);

console.log(per3.nome);
