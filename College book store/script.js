// script.js
function addToCart(title, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ title, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} added to cart!`);
}

function loadCart() {
    const cartList = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartList.innerHTML = '<li>No items in cart.</li>';
    } else {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.image}" alt="${item.title}" width="60" style="vertical-align: middle; margin-right: 10px;">
                <strong>${item.title}</strong> - Rs ${item.price}
            `;
            cartList.appendChild(li);
        });
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
    alert('Cart cleared!');
}