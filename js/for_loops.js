function showMultiplicationTable(number) {
    for(var i = 1; i <= 10; i++  ){
        console.log("the count is " + (number * i)  );
    }
}

//first part is where we are starting , 2nd part is where you want it to stop/checks to see if true or false
//3rd part add on every time
for(var i = 1; i <= 10; i++ ) {
    var random = Math.floor((Math.random() * 180) + 20);
    if (random % 2 === 0) {
        console.log("its even " + random);
    } else {
        console.log("its odd " + random);
    }
}

for(var i = 1; i <= 9; i++){
    var strings = "";
    for(var m = 1; m <= i; m++){
        strings += i;
   }
    console.log(strings);
}
for(var i = 100; i >= 5; i = i - 5){
    console.log(i)
}

