/*  username.focus();
      username.style.border = "3px solid red";
      return false;
*/
  function myForm() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value.length < 5 || password.value.length < 5) {
      alert("Username and Password should be at least 5 characters");
      return false;
    }
  if (username.value == "Great" && password.value =="Viper") {
      alert("successfully logged in");
    }
  else {
    alert("incorrect");
    return false;
    }  
  }