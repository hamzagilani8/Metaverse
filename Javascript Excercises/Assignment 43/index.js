function sandwitch (itemsWanted){
    console.log("\n!!!!!!!Making a yummy sandwitch!!!!!!")
    for (var i = 0; i < itemsWanted.length; i++){
        console.log("adding " + itemsWanted[i] + " to your sandwitch");
    }
    console.log("Your sandwitch with " + itemsWanted.join(", ") + " is ready!");
}

sandwitch(["Lattace", "Cucumber", "Musturd sauce"]);
sandwitch(["Onion", "Tomato"]);
sandwitch(["Onion", "Tomato", "Lattace", "Cucumber", "Musturd sauce", "Peri-peri chicken"]);
