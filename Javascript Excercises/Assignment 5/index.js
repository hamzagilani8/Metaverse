var name1 = " \t Syed Hamza Gilani \n ";
var finalName = [];
var name2 = name1.split(" ");
for (var i = 0; i < name2.length; i++){
    if ( name2[i] != '' && name2[i] != '\t' && name2[i] != '\n'){
            finalName.push(name2[i]);
    }
}
console.log("Name with spaces:" + name1);
console.log("Final Name:" + finalName.join(' '));