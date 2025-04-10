document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".slider img");
    let index = 0;
    setInterval(() => {
        images[index].style.display = "none";
        index = (index + 1) % images.length;
        images[index].style.display = "block";
    }, 3000);
});


function showDetails(itemName, price) {
    alert(itemName + " costs " + price);
}
// IMAGE SLIDER FUNCTION
let index = 0;
function showNextImage() {
    let images = document.querySelectorAll('.slider img');
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
}

setInterval(showNextImage, 3000);
const cart = [];
const cartList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Add to Cart
function addToCart(itemName, price) {
    const existing = cart.find(item => item.name === itemName);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }
    updateCart();
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Clear Cart
function clearCart() {
    cart.length = 0;
    updateCart();
}

// Update Cart Display
function updateCart() {
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
                        <button onclick="removeFromCart(${index})">✕</button>`;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
}
