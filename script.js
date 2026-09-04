let productImg = [
    {
        name:"Black Buffer",
        image:"./product2.png",
        price:"$100",
    },
     {
         name:"Black Buffer",
        image:"./product3.png",
        price:"$100",
    },
     {
     name:"Black Buffer",
        image:"./product4.png",
        price:"$100",
    },
     {
         name:"Black Buffer",
        image:"./product5.png",
        price:"$100",
    },
]
let cartItems = document.querySelector('.cart-items')
let cart = document.querySelector('#cart')
let MainImg = document.querySelector('#MainImg');
cart.addEventListener('click',function(){
    cartItems.style.visibility = "visible";
})
let currentProduct = productImg[0];
let cartProducts = [];
let clutter = '';
function cartRender(){
cartProducts.forEach(function(ProductRender){

 clutter += `<img src="${ProductRender.image}" alt="">
            <div class="product-info">
            <h4>${ProductRender.name}</h4>
            <h3>${ProductRender.price}</h3>
            </div>`


cartItems.innerHTML = clutter;

})
}
document.querySelector('.look').addEventListener('click',function(){

cartProducts.push(currentProduct);
cartRender();
})