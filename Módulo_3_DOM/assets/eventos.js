function soltou(e) {
    console.log("Tecla apertada" + e.code);
    console.log("Shift? " + e.shiftKey);
    console.log('--');
}

document.addEventListener('keyup', soltou)


function clicou() {
        const teste = document.querySelector('#teste');
        const ul = teste.querySelector('ul')        
        
    // ul.after("texto Qualquer")  // Adiciona textos após o elemento selecionado.
    // ul.before("texto Qualquer")  // Adiciona textos antes o elemento selecionado.

    /*
        Adicionando elemento na página 
    */

    //    const newButton = document.createElement('button');
    //    newButton.innerHTML = "Botão";
    //    ul.before(newButton)


    /*
        Adicionando uma lista
    */

        let newUl = document.createElement('ul');
        
        for (let i = 0 ; i < 5 ; i ++) {
            let newLi = document.createElement('li')
            newLi.innerHTML = "item add " + i;
            newUl.append(newLi)
        }

        ul.after(newUl);
        
    }

    // ul.innerHTML =  ul.innerHTML + "<li>Texto alterado</li>";
    // ul.children[0].innerHTML = "Primeiro iten";
    
    // ul.children[0].append(" alterado")
    
    // let newLi = document.createElement("li");
    // newLi.innerText = "Item adcionado"
    // ul.appendChild(newLi); // adiciona no final do elemento.

    // let newLi = document.createElement("li");
    // newLi.innerText = "Item adcionado"
    // ul.prepend(newLi); // adiciona no inicio do elemento.

    // ul.innerHTML += "<li>Item adicionado</>";

    
