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