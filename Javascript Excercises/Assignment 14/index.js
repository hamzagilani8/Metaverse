var guests = ["Amir", "Abdullah", "Ejaz"];
for (var i = 0; i < guests.length; i++){
    console.log("Welcome to my birthday party " + guests[i])
}

console.log(guests[1] + " would not be coming to the party.");
guests.splice(1, 1, "Hassan");

for (var i = 0; i < guests.length; i++){
    console.log("Welcome to my birthday party " + guests[i])
}
