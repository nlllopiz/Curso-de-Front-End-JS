const cartItems = document.querySelector(".cart ul");
const total = document.querySelector(".total-price");
const clearBtn = document.querySelector(".clear-cart-btn");
let cartTotal = 0;

clearBtn.addEventListener("click", clearCart);

function clearCart() {
    cartItems.innerHTML = "";
    cartTotal = 0;
    total.textContent = "$" + cartTotal;
}

const products = document.querySelectorAll(".product");

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const addToCartBtn = product.querySelector(".add-to-cart-btn");
    const price = product.getAttribute("data-price");

    addToCartBtn.addEventListener("click", addToCart);

    function addToCart() {
        const li = document.createElement("li");
        li.textContent = product.querySelector("h3").textContent + " - $" + price;
        cartItems.appendChild(li);
        cartTotal += parseFloat(price);
        total.textContent = "$" + cartTotal;
    }
}