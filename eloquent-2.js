var triangle = "";
for (i=1; i <=7; i++) {
    console.log (triangle = triangle + "#");
}

for (var i = 0; i < 100; i++) {
    var number = i + 1;
    var result = "";
    if (number % 3 == 0) {
      result = "Fizz";
    }
    if (number % 5 == 0) {
        result += "Buzz";
    } 
    if (!result) {
        result = i + 1;
    }
    console.log(result);
  }
  
  var size = 8;
for (var i = 0; i < size; i++) {
  var line = "";
  for (var j = 0; j < size; j++) {
    var total = i + j;
  	if (total % 2 == 0) { 
  	  line += '#';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}