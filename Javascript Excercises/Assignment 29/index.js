var users = ["Admin", "Hamza", "Asad", "Daniyal", "Tahir"];
var userLogin = prompt("What is your username?").toLowerCase();

for (var i = 0; i < users.length; i++){
    if (userLogin == users[i].toLowerCase() && userLogin == "admin"){
        document.getElementById("greatings").innerHTML = "Hello admin, would you like to see a status report?";
    }
    else if(userLogin == users[i].toLowerCase() && userLogin != "admin"){
        document.getElementById("greatings").innerHTML = "Hello " +  users[i] +", thank you for logging in again.";
    }
    else{
        document.getElementById("greatings").innerHTML = "It seems like you are not a user. Please signin or contact the admin.";
    }
}