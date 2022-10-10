var shirtSize = prompt("Which size shirt do you want to order? (Small, Medium, Large)").toLowerCase();

function makeShirt(size) {
    if (size == "large" || size == "medium"){
        message = prompt("What message do you want to get printed on it?", "I Love Javascript");
    }
    else{
        message = prompt("What message do you want to get printed on it?");
    }
    console.log("The client have ordered a " + size + " shirt with the message " + message + " to be printed on it");
}

makeShirt(shirtSize);