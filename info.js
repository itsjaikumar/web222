const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const password = document.getElementById("pass");
const passwordConfrm = document.getElementById("pass2");
const username = document.getElementById("username");
const form = document.getElementById("form");

//function for form validation
form.addEventListener("submit", (e) => {
  var errors = [];
  if (password.value.length != 6) {
    errors.push("Password must contain only 6 characters");
  }
  var passwordTrim = password.value.trim();
  var passwordUpper = passwordTrim.toUpperCase();
  if (passwordUpper.charAt(0) < "A" || passwordUpper.charAt(0) > "Z") {
    errors.push("Password must start with alphabet");
  }
  var alphString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passAlpha = false;
  for (var i = 0; i < passwordTrim.length; i++) {
    if (alphString.indexOf(passwordTrim.substr(i, 1)) >= 0) {
      passAlpha = true;
    }
  }
  if (!passAlpha) {
    errors.push("Enter password with atleast one uppercase letter");
  }

  var re = /[0-9]/;
  if (!re.test(passwordTrim)) {
    errors.push("Password must contain atleast one digit");
  }

  if (!(password.value === passwordConfrm.value)) {
    errors.push("passwords must match");
  }

  var usernameTrim = username.value.trim();
  var usernameUpper = usernameTrim.toUpperCase();
  if (usernameUpper.charAt(0) < "A" || usernameUpper.charAt(0) > "Z") {
    errors.push("Username must start with alphabet");
  }
  if (username.value.length < 6) {
    errors.push("Username must contain atleast 6 characters");
  }

  if (errors.length > 0) {
    e.preventDefault();
    for (var i = 0; i < 5; i++) {
      if (errors[i] != undefined) {
        var div = document.getElementById("errors");
        div.innerHTML += `${i + 1}.${errors[i]}<br/>`;
      }
    }
  }
});

//function for reset button to clear fields
form.addEventListener("reset", (e) => {
  document.getElementById("errors").innerHTML = "";
});

// function to change the background colour of active link
function backgroundChange() {
  var path = window.location.pathname;
  var file = path.split("/").pop();
  if (file === "honesty.html") {
    document.getElementById("honesty").style.backgroundColor = "#2d97cc";
    document.getElementById("honesty").style.color = "white";
  } else if (file === "info.html") {
    document.getElementById("info").style.backgroundColor = "#2d97cc";
    document.getElementById("info").style.color = "white";
  } else if (file === "reflection.html") {
    document.getElementById("reflection").style.backgroundColor = "#2d97cc";
    document.getElementById("reflection").style.color = "white";
  }
}
