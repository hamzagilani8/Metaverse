var guessedColor = prompt("Guess wether the Alien is Green, Yellow Or Red?").toLowerCase();
var alienColor = "green";

if (guessedColor == alienColor){
    document.getElementById("result").innerHTML = "You Get 5 Points :)";
}
else{
    document.getElementById("result").innerHTML = "You Lost!";
}