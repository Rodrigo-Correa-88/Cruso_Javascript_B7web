let seuVotoPara = document.querySelector('.d_1_1 span');
let cargo = document.querySelector('.d_1_2 span');
let descricao = document.querySelector('.d_1_4');
let aviso = document.querySelector('.d_2');
let lateral = document.querySelector('.d_1_right')
let numeros = document.querySelector('.d_1_3')

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numerosHTML = '';

    for(let i=0; i<etapa.numeros; i++){
        if (i === 0) {
            numerosHTML += '<div class="numero pisca"></div>'
        } else {
            numerosHTML += '<div class="numero"></div>'
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numerosHTML;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if (item.numero === numero) {
            return true;
        } else {
            return false
        }
    });

    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido:${candidato.partido} `; 

        let fotosHTML = '';
        for (let i in candidato.fotos) {
            fotosHTML += `<div class="d_1_img">
            <img src="assets/images/${candidato.fotos[i].url}" alt="">
            ${candidato.fotos[i].legenda}
        </div>`;
        }

        lateral.innerHTML = fotosHTML;
    }

    console.log("candidato", candidato );
}


function clicou (n) {
    let elnumero = document.querySelector('.numero.pisca');
    if( elnumero !== null) {
        elnumero.innerHTML = n
        numero = `${numero}${n}`

        elnumero.classList.remove('pisca');
        if(elnumero.nextSibling !== null) {
        elnumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface();
        }
    }
}

function branco() {
    alert("Clicou em BRANCO")
}

function corrige() {
    alert("Clicou em CORRIGE")
}

function confirma() {
    alert("Clicou em CONFIRMA")
}

comecarEtapa();