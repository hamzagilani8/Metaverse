var magicians = ["Munawar Khan", "Kuda Bux", "M.Ejaz Mughal"];

function showMagicians (name){
    for (var i = 0; i < name.length; i++){
        console.log(name[i])
    }
}

function makeGreat (greatName){
    var newGreat = [];
    for (var i = 0; i < greatName.length; i++){
        newGreat[i]= "The Great " + greatName[i];
    }
    return newGreat;
}

showMagicians(magicians)
var greatMagicians = makeGreat([...magicians]);
showMagicians(greatMagicians);
showMagicians(magicians);

console.log("Original array: " + magicians);
console.log("Changed array: " + greatMagicians);