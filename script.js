let selectedItem = "";
let selectedPrice = 0;

function scrollToStore() {
  document.getElementById("store").scrollIntoView({ behavior: "smooth" });
}

function buy(item, price) {
  selectedItem = item;
  selectedPrice = price;

  document.getElementById("itemName").innerText = "Item: " + item;
  document.getElementById("itemPrice").innerText = "Price: LKR " + price;

  document.getElementById("checkout").style.display = "block";
}

function closeModal() {
  document.getElementById("checkout").style.display = "none";
}

function confirmOrder() {
  let uid = document.getElementById("uid").value;

  if (uid === "") {
    alert("Please enter UID");
    return;
  }

  alert(
    "Order Placed!\n\n" +
    "Item: " + selectedItem +
    "\nPrice: LKR " + selectedPrice +
    "\nUID: " + uid
  );

  closeModal();
}