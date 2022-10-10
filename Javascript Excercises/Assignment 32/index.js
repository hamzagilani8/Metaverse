var numbers = [];
 for (var i = 1; i <= 9; i++){
    numbers.push(i);
 }

 for (var i = 0; i < numbers.length; i++){
    if(numbers[i] == 1){
        console.log("1st");
    }
    else if (numbers[i] == 2){
        console.log("2nd");
    }
    else if (numbers[i] == 3){
        console.log("3rd");
    }
    else if (numbers[i] > 3){
        console.log(numbers[i] + "th");
    }
 }