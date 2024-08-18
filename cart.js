const search = document.querySelector('.search')
const searchFrom = document.querySelector('.search-from')

search.addEventListener("click", () =>{
    searchFrom.classList.add('active');
    cartContainer.classList.remove('active');
})

const cart = document.querySelector('.cart')
const cartContainer = document.querySelector('.cart-container')

cart.addEventListener("click", () =>{
    cartContainer.classList.add('active');
    searchFrom.classList.remove('active');
})