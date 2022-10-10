var guessedColor = prompt("Guess wether the Alien is Green, Yellow Or Red?").toLowerCase();


if (guessedColor == "green"){
    document.getElementById("result").innerHTML = "You Get 5 Points :)";
}
else if (guessedColor == "yellow") {
    document.getElementById("result").innerHTML = "You Get 10 Points :)";
}
else if (guessedColor == "red"){
    document.getElementById("result").innerHTML = "You Get 15 Points :)";
}
else{
    document.getElementById("result").innerHTML = "Wrong Entry";
}