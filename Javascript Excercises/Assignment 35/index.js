
function makeShirt(size , message){
    console.log("The client have ordered a " + size + " shirt with the message " + message + " to be printed on it");
}

var shirtSize = prompt("Which size shirt do you want to order? (Small, Medium, Large)");
var shirtMessage = prompt("What message do you want to get printed on it?");

makeShirt(shirtSize , shirtMessage);
