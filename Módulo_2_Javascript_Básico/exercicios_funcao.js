/*
    Calcule a porcentagem entre 2 números.
    Exemplo: 25% de 40 é 10
    Fórmula da porcentagem: (y / x ) * 100;   
*/

function calcPct(num1,num2) {
    let porc = (num2 / num1) * 100;
    return porc;    
}

let x = 50
let y = 10
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`);

/*
    Calcule o preço do imóvel
    -m² = 3.000
    - 1 quarto m² = 1x
    - 2 quartos m² = 1.2x
    - 3 quartos m² = 1.5x
*/

function precoImovel(metragem,quarto) {
    if (quarto == 1){
        return valor = metragem * 3000;
    } else if ( quarto == 2) {
        return valor = (metragem * 3000) * 1.2;
    } else if ( quarto == 3) {
        return valor = (metragem * 3000) * 1.5;
    }    
}

let metragem = 123;
let quartos = 3
let preco = precoImovel(metragem,quartos)
console.log(`A casa custa ${preco}`);

/*
    Crie uma função que valide um usúario e senha
    Usúario = Pedro
    Senha = 123
*/

function validacao(usuario, senha) {

    let validarusuario = "Pedro";
    let validarsenha = 123;
    
    if ( usuario == validarusuario && senha == validarsenha) {
       return console.log("Acesso Concedido");
    } else {
        return console.log("Acesso Negado");
    }; 
}

let usuario = "bonieky";
let senha = "1234";
validacao (usuario,senha);
