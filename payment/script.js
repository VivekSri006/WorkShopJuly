function Redirect() {
  window.location = "https://www.facebook.com/";
}
function SignUpRed() {}
function dha() {
  window.confirm("you have to SignUp...");
}
// loginBtn.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("The button is paused");
// });

document.getElementById("loginBtn").addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "") {
    alert("Username is required");
  } else if (password == "") {
    alert("Password is required");
  } else {
    Redirect();
  }
});

// document.getElementById("forin").addEventListener("click"),
//   function () {
//     // window.confirm("you have to signup ");

//     onclick = window.confirm("you have to SignUp");
//   };

// function validate() {
//   var flag = true;
//   let username = document.getElementById("username").value.trim();
//   if (username == "") {
//     flag = false;
//     document.getElementById("username").style.borderColor = "red";
//   } else {
//     document.getElementById("username").style.borderColor = "";
//   }

//   let password = document.getElementById("password").value.trim();
//   if (password == "") {
//     flag = false;
//     document.getElementById("password").style.borderColor = "red";
//   } else {
//     document.getElementById("password").style.borderColor = "";
//   }
//   if (flag === false) {
//     return flag;
//   }

//   document.getElementById("loginBtn");
// }
