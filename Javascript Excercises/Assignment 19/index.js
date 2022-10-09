var numberOfCrasLiked = Number(prompt("How many cars you like?","2"));
var cars = [];

for (var i = 0; i < numberOfCrasLiked; i++){
    cars[i] = prompt("Input cars You Like:");
}
console.log(cars);