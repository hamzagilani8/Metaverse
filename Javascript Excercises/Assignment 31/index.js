var currentUsers= ["Admin", "Hamza", "Asad", "Daniyal", "Tahir"];
var newUsers = ["Ali", "Abdullah", "Daniyal", "HAMZA"];
var currentUsersLower = [];

for (var i = 0; i < currentUsers.length; i++){
    currentUsersLower.push(currentUsers[i].toLowerCase());
}

for (var i = 0; i < newUsers.length; i++){
    if (currentUsersLower.includes(newUsers[i].toLowerCase())){
        document.getElementById("message").innerHTML = "Username used, Please enter a new username!";
        console.log(newUsers[i] + " Used")
    }
    else {
        document.getElementById("message").innerHTML = "Username available";
        console.log(newUsers[i] + " Available")
    }
}






// for (var i = 0; i < newUsers.length; i++){
//     for (var j = 0; j < currentUsers.length; j++){
//         if(newUsers[i].toLowerCase == currentUsers[j].toLowerCase){
//             document.getElementById("message").innerHTML = "Username used, Please enter a new username!";
//         }
//         else{
//             document.getElementById("message").innerHTML = "Username available";
//         }
//     }
// }