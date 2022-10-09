/*
Name: Syed Hamza Gilani
Date: 09/10/2022
Time: 7:29 PM 
*/
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
/*
This program Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/