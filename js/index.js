
let input = document.querySelector(`.search-input`);
let button = document.querySelector('.order-button');


input.addEventListener("input", function (evt) {
  let search = evt.target.value.toLowerCase();
  let hasVisibleItems = false; 

  for (let i = 0; i < card.length; i++) {
    let cards = card[i];
    let title = cards.textContent.toLowerCase(); 

    if (title.includes(search)) {
      cards.classList.remove("d-none");
      hasVisibleItems = true; 
    } else  {
      cards.classList.add("d-none");
      
        
      
    }
    
  }

  
  if (!hasVisibleItems) {
    error.innerHTML = "На странице ничего не найдено.";
    img.innerHTML = `<img src="assets/error.png" alt="error">`;
  } else{
    error.innerHTML = ``;
    img.innerHTML = ``;
  }
 
  
});

  input.value = ``; 


let prices = [ 200, 1500, 25000, 1200, 3000, 5000];
let available = [false, true, true, true, true, false];
// контайнер товаров
let container = document.querySelector(`.good-container`);
let error = document.querySelector(`.error`);
let img = document.querySelector(`.img`);

let card = document.querySelectorAll(`.cards`);
let titleArr = document.querySelectorAll(`.good-title`);
let sidebartotal = document.querySelector(`.sidebar-total`);
let sidebarlist = document.querySelector(`.sidebar-list`);


let total = 0;
let basket = [];

function renderBasket(items) {
    
    sidebarlist.innerHTML = ``;
    sidebartotal.innerHTML = `Итого: ${total}`;
    for(let i = 0; i < items.length; i++) {
        sidebarlist.innerHTML += `<li class="item">${items[i]}</li>`
         
    }
}

 for(let i = 0; i < card.length; i++) {
    
    let cards = card[i];
    let itemBasket = titleArr[i].innerHTML;
  
    
        cards.addEventListener(`click`, function() {
            cards.classList.toggle(`card-active`);
            if(cards.classList.contains(`card-active`)) {
                total += prices[i]
                basket.push(itemBasket);
                renderBasket(basket)

            } else{
                
                let removeIndex = basket.indexOf(itemBasket);
                basket.splice(removeIndex, 1);
                total -= prices[i];
                renderBasket(basket);
                
                
            }
        
           
        });
        sidebartotal.innerHTML = `Итого: ${total }`;
    }  

     button.addEventListener(`click`, function() {
         for(let i = 0; i < card.length; i++) {
    
          let cards = card[i];
    
  
        if(cards.classList.contains(`card-active`)) {
        sidebarlist.innerHTML = `Заказ собран.`
        } else{
            sidebarlist.innerHTML = `Соберите заказ.`
        }
    }
         
        });
    
    

    let sidebar = document.querySelector(`.sidebar`);
let cart = document.querySelector(`.cart-button`);

    cart.addEventListener(`click`, function() {
        
        sidebar.classList.toggle(`hidden`);
    });

    let titles = [
        `Кактус`,
        `Настенные часы`,
        `Телевизор`,
        `Блендер`,
        `Шторы`,
        `Комплект посуды`,
    ];


 