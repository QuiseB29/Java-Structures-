const IsLogged = true
const IsNotLogged = false
const cart= [20, 32, 76, 100];


if (IsLogged) {
    console.log("You can proceed with your shopping");
}   else if (IsNotLogged) {
    console.log("You are not logged in.")
}   else {
    console.log("Invalid")
}


const calculateTotalPrice = (cart) => {
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i];
    }

    return totalPrice;
};

const totalPrice = calculateTotalPrice(cart);
console.log(`Total price of items in the cart: $${totalPrice}`);
