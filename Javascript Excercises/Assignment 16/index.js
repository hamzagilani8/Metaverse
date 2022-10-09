var guests = ["Amir", "Abdullah", "Ejaz"];
for (var i = 0; i < guests.length; i++){
    console.log("Welcome to my birthday party " + guests[i])
}

console.log(guests[1] + " would not be coming to the party.");
guests.splice(1, 1, "Hassan");

for (var i = 0; i < guests.length; i++){
    console.log("Welcome to my birthday party " + guests[i])
}

console.log("Friends, I found a bigger table and more people would be joining us tonight!");
guests.splice(0, 0, "Ahsan");
guests.splice(2, 0, "Hamza");
guests.push("Salman");

for (var i = 0; i < guests.length; i++){
    console.log("Welcome to my birthday party " + guests[i])
}

console.log("I'm sorry frinds we can have only 2 of you here in the party!");
for (var i = guests.length; i > 2; i--){
    leavingGuest = guests.pop();
    console.log( leavingGuest + " I'm sorry I can not invite you to the party at the moment.");
}

for (var i = 0; i < guests.length; i++){
    console.log(guests[i] + " you are still invited to my birthday party ")
}

for (var i = guests.length; i >= 0; i--){
    byeAll = guests.pop();
}

console.log(guests);