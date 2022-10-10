var yourName = prompt("What is your name?").toUpperCase();
var age = Number(prompt("What is your age?"));

if (age < 2){
    document.getElementById("result").innerHTML = yourName + " is a baby";
}
else if (age >= 2 && age < 4){
    document.getElementById("result").innerHTML = yourName + " is a toddler";
}
else if (age >= 4 && age < 13){
    document.getElementById("result").innerHTML = yourName + " is a kid";
}
else if (age >= 13 && age < 20){
    document.getElementById("result").innerHTML = yourName + " is a teenager";
}
else if (age >= 20 && age < 65){
    document.getElementById("result").innerHTML = yourName + " is an adult";
}
else if (age >= 65){
    document.getElementById("result").innerHTML = yourName + " is an elder";
}
