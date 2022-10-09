var name1 = prompt("Please enter your name","Syed Hamza Gilani");
document.getElementById("lower").innerHTML =  name1.toLowerCase();
document.getElementById("upper").innerHTML =  name1.toUpperCase();


// FUNCTION FOR TITLE CASE
function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

document.getElementById("title").innerHTML =  toTitleCase(name1);