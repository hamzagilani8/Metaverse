var animals = ["Blue Whale", "Elephant", "Wolf"];

for (var i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

for (var i = 0; i < animals.length; i++){
    console.log(animals[i] + " is a mammal!");
}

console.log(animals.join(", ") + " are mammals.");