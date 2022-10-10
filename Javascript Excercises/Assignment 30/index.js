var users = ["Admin", "Hamza", "Asad", "Daniyal", "Tahir"];

console.log(users);

for (var i = 0; i = users.length; i++){
    users.pop();
}

console.log(users);

if (users.length == 0){
    document.getElementById("message").innerHTML = "We need to find some users!";
}