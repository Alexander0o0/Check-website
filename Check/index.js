const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const masterCard = document.getElementById("masterCard")
const paypalBtn = document.getElementById("paypalBtn")
const mySumbit = document.getElementById("mySumbit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySumbit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed!"
    }
    else{
        subResult.textContent = "You are not subscribed"
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa"
    }
    else if (paypalBtn.checked){
        paymentResult.textContent = "You are paying with PayPal"
    }
    else if (masterCard.checked){
        paymentResult.textContent = "You are paying with Master Card"
    }
    else{
        paymentResult.textContent = "Please select a payment option"
    }
}
