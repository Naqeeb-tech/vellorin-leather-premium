function payNow(productName, amount) {

var options = {

key: "rzp_live_TEft2IA1fFS4W4",

amount: amount * 100,

currency: "INR",

name: "VELLORINS",

description: productName,

image: "https://raw.githubusercontent.com/Naqeeb-tech/vellorin-leather-premium/main/logo.png",

handler: function (response) {

alert("Payment Successful");

alert("Payment ID: " + response.razorpay_payment_id);

window.location.href="thankyou.html";

},

theme: {

color:"#d4af37"

}

};

var rzp = new Razorpay(options);

rzp.open();

}
