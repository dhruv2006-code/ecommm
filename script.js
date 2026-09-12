let productImg = [
    {
        name:"Black Buffer",
        image:"./product2.png",
        price:"$100",
        fakePrice:'$299'
    },
     {
         name:"Leather",
        image:"./product3.png",
        price:"$59",
          fakePrice:'$99'
    },
     {
     name:"Old Money Coat",
        image:"./product4.png",
        price:"$36",
          fakePrice:'$86'
    },
     {
         name:"Army Jacket",
        image:"./product5.png",
        price:"$50",
          fakePrice:'$70'
    },
]
let cartItems = document.querySelector('.cart-items')
let cart = document.querySelector('#cart')
let MainImg = document.querySelector('#MainImg');
cart.addEventListener('click',function(){
    cartItems.style.visibility = "visible";
})
let currentProduct = productImg[2];
let cartProducts = [];
function cartRender(){
    let clutter = "";
    cartProducts.forEach(function(ProductRender){
        clutter += `<img src="${ProductRender.image}" alt="">
                    <div class="product-info">
                        <h4>${ProductRender.name}</h4>
                        <h3>${ProductRender.price}</h3>
                    </div>`;
    });
    cartItems.innerHTML = clutter;
}
document.querySelector('#price').textContent = productImg[0].price;

document.querySelector('.look').addEventListener('click',function(){

cartProducts.push(currentProduct);

cartRender();
})
let switchImage = ["./product2.png","./product3.png","./product4.png","./product5.png"];
function imgSwitch(){
    let smallImg = document.querySelector('#small-img');
    smallImg.addEventListener('click',function(){
    MainImg.src = switchImage[0];
    console.log(MainImg);
    console.log(switchImage);       
    })

}
imgSwitch();