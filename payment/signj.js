document.getElementById("btn-sign").addEventListener("click", function () {
  let validationServer01 = document.getElementById("validationServer01").value;
  let validationServer02 = document.getElementById("validationServer02").value;
  let validationServerUsername = document.getElementById(
    "validationServerUsername"
  ).value;
  let validationServerPass = document.getElementById(
    "validationServerPass"
  ).value;
  let validationServer03 = document.getElementById("validationServer03").value;
  let validationServer04 = document.getElementById("validationServer04").value;
  let validationServer05 = document.getElementById("validationServer05").value;
  if (validationServer01 == "") {
    alert("First Name is Required");
  } else if (validationServer02 == "") {
    alert("Last Name is Required");
  } else if (validationServerUsername == "") {
    alert("UserName is Required");
  } else if (validationServerPass == "") {
    alert("Password is Required");
  } else if (validationServer03 == "") {
    alert("City is Required");
  } else if (validationServer04 == "") {
    alert("State is Required");
  } else if (validationServer05 == "") {
    alert("Mobile Number is required is Required");
  } else {
    alert("SignUp Successfully");
  }
});
