const input = document.querySelector('input');
const lista = document.querySelector('ul');

function handleKeyUp(e) {
    if (e.key === 'Enter') {
        const newli = document.createElement('li')
        newli.innerHTML = input.value;
        lista.appendChild(newli)
        input.value = '';
    }
}


document.addEventListener('keyup', handleKeyUp);