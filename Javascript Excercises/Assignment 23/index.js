var food = "Biriyani";
var fruits = ["Apple", "Orange", "Grapes", "Dates"];
var foodQuantityInPlates = 2;

console.log(food === "Biriyani");                                       //True
console.log(food === "biriyani");                                       //False
console.log(food.toLowerCase() === "biriyani");                         //True
console.log(food === "biriyani");                                       //False
console.log(foodQuantityInPlates == 2);                                 //True
console.log(foodQuantityInPlates <= 2);                                 //True
console.log(foodQuantityInPlates >= 2);                                 //True
console.log(foodQuantityInPlates > 2);                                  //False
console.log(foodQuantityInPlates < 2);                                  //False
console.log(food == "Biriyani" && foodQuantityInPlates <= 2);           //True
console.log(food == "Biriyani" || foodQuantityInPlates < 2);            //True
console.log(fruits.includes("Apple"));                                  //True
console.log(fruits.includes("Guava"));                                  //False