function AutoRefresh( t ) {
var time = setTimeout("location.reload(true);", t);
  if(time==(true)) {
 //   alert("Timeout");
 //  return submit();
  }
  }
function submit() {
 var retVal = confirm("Do you want to Submit ?");
 if( retVal == true ){
  var score = 0;
  var maxQuestion = "20 Questions";
  if (document.getElementById("correct1").checked) {
    score++;
  }
  if (document.getElementById("correct2").checked) {
    score++;
  }
  if (document.getElementById("correct3").checked) {
    score++;
  }
  if (document.getElementById("correct4").checked) {
    score++;
  }
  if (document.getElementById("correct5").checked) {
    score++;
  }
  if (document.getElementById("correct6").checked) {
    score++;
  }
  if (document.getElementById("correct7").checked) {
    score++;
  }
  if (document.getElementById("correct8").checked) {
    score++;
  }
  if (document.getElementById("correct9").checked) {
    score++;
  }
  if (document.getElementById("correct10").checked) {
    score++;
  }
  if (document.getElementById("correct11").checked) {
    score++;
  }
  if (document.getElementById("correct12").checked) {
    score++;
  }
  if (document.getElementById("correct13").checked) {
    score++;
  }
  if (document.getElementById("correct14").checked) {
    score++;
  }
  if (document.getElementById("correct15").checked) {
    score++;
  }
  if (document.getElementById("correct16").checked) {
    score++;
  }
  if (document.getElementById("correct17").checked) {
    score++;
  }
  if (document.getElementById("correct18").checked) {
    score++;
  }
  if (document.getElementById("correct19").checked) {
    score++;
  }
  if (document.getElementById("correct20").checked) {
    score++;
  }
  alert("you scored " + score + " out of " + maxQuestion);
   setTimeout("location.reload(true);", 0000);
 }
else{
//document.write ("User does not want to continue!");
 return false;
 }
} 
  document.write ("<br><b>Date: </b>" + new Date().toDateString());
document.write("<br><b>Time: </b>" + new Date().toTimeString());