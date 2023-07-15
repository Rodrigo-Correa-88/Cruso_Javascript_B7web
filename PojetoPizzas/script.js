let cart = [];
let modalQt = 1;
let modalKey = 0;

const qy = (el) => document.querySelector(el)
const qya = (el) => document.querySelectorAll(el)

pizzaJson.map((item, index)=> {
    let pizzaItem = qy('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index); 

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;  
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

   pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    let key  = e.target.closest('.pizza-item').getAttribute('data-key');
    modalQt = 1;
    modalKey = key;

    qy('.pizzaBig img').src = pizzaJson[key].img;
    qy('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    qy('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    qy('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
    qy('.pizzaInfo--size.selected').classList.remove('selected');
    qya('.pizzaInfo--size').forEach((size, sizeIndex)=>{  
        if(sizeIndex == 2) {
            size.classList.add('selected');
        }      
        size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    qy('.pizzaInfo--qt').innerHTML = modalQt;
    
    qy('.pizzaWindowArea').style.opacity = 0; 
    qy('.pizzaWindowArea').style.display = 'flex';
    setTimeout(()=> {
     qy('.pizzaWindowArea').style.opacity = 1;
    }, 200); 
   })
    qy('.pizza-area').append(pizzaItem);
});

function closeModal () {
    qy('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        qy('.pizzaWindowArea').style.display = 'none';
    }, 500)
}
qya('.pizzaInfo--cancelButton, pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

qy('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qy('.pizzaInfo--qt').innerHTML = modalQt;
    modalQt++;
});

qy('.pizzaInfo--qtmenos').addEventListener('click',()=>{
     if(modalQt > 0){
        qy('.pizzaInfo--qt').innerHTML = modalQt;
        modalQt--;
     }   
});

qya('.pizzaInfo--size').forEach((size, sizeIndex)=>{  
   size.addEventListener('click', (e)=>{
    qy('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
   })
});

qy('.pizzaInfo--addButton').addEventListener('click', ()=>{
     let size = parseInt(qy('.pizzaInfo--size.selected').getAttribute('data-key'));
     let identifier = pizzaJson[modalKey].id + '@' + size;
     let key = cart.findIndex((item)=>item.identifier == identifier);
     if(key > -1) {
        cart[key].qt += modalQt;
     } else{
     cart.push({
        identifier,
        id:pizzaJson[modalKey].id,
        size,
        qt:modalQt
     });
    }
    updateCart();
    closeModal();
});

qy('.menu-openner').addEventListener('click', () => {
    if(cart.length > 0) {
        qy('aside').style.left = '0';
    }
})

qy('.menu-closer').addEventListener('click', () => {
    qy('aside').style.left = '100vw';
})

function updateCart () {
    qy('.menu-openner span').innerHTML = cart.length;

    if (cart.length > 0) {
        qy('aside').classList.add('show')
        qy('.cart').innerHTML = '';

         let subtotal = 0;
         let desconto = 0;
         let total = 0; 

        for(let i in cart) {

            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);

            subtotal += pizzaItem.price * cart[i].qt;
            let cartItem = qy('.models .cart--item').cloneNode(true)
            let pizaSizeName;
            switch (cart[i].size) {
                case 0:
                    pizaSizeName = 'P'
                    break;
                case 1:
                    pizaSizeName = 'M'
                    break;
                case 2:
                    pizaSizeName = 'G'
                    break;            
                default:
                    break;
            }
            let pizzaName = `${pizzaItem.name} (${pizaSizeName})`;


            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                if (cart[i].qt > 1 ) {
                    cart[i].qt--;                    
                }else {
                    cart.splice(i,1)
                }
               updateCart(); 
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                cart[i].qt++
                updateCart();
            });
            qy('.cart').append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        qy('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        qy('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        qy('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;


    } else {
        qy('aside').classList.remove('show')
        qy('aside').style.left = '100vw'
    }
}


