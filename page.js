function showMessage() {
  alert("Welcome to ByteBite! Start your order below.");
}

document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let food = document.getElementById("food").value;
  let quantity = document.getElementById("quantity").value;

  document.getElementById("orderMessage").textContent =
    "Thank you, " + name + "! Your order for " + quantity + " " + food + "(s) has been received.";
});