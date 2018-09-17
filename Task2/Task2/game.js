var number = Math.floor(Math.random() * 5) + 1;
var wantPlay = confirm("Want to play a game?");
var notFound = 0;
if (wantPlay) {
  var userNumber;
  for (var i = 0; i <= 3; i++){ userNumber= prompt("Write a number from 1 to 5");}
    if (userNumber == number) {
      alert("Congratulations! You are winner!");
      break;
    } else {
      notFound++;
    }
    if (notFound == 3) {
      alert("Today is not your day.");
    }
} else {
  alert("Not today");
}

