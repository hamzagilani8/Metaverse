var magicians = ["Munawar Khan", "Kuda Bux", "M.Ejaz Mughal"];

function showMagicians (name){
    for (var i = 0; i < name.length; i++){
        console.log(name[i])
    }
}

function makeGreat (greatName){
    for (var i = 0; i < greatName.length; i++){
        greatName[i] = "The Great " + greatName[i];

    }
}

showMagicians(magicians)
makeGreat(magicians);
showMagicians(magicians);
