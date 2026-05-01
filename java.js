function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: itemName,
        price: itemPrice
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach(function(item) {
        subtotal += item.price;

        cartItems.innerHTML += `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
    });

    let tax = subtotal * 0.06625;
    let total = subtotal + tax;

    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

document.addEventListener("DOMContentLoaded", function() {
    displayCart();

    const form = document.getElementById("orderForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            let firstName = document.getElementById("firstName").value;

            document.getElementById("confirmationMessage").textContent =
                "Thank you, " + firstName + "! Your order has been placed.";

            localStorage.removeItem("cart");
            displayCart();
        });
    }
});