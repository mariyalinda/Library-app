function check() {
  var email = document.getElementById("inputEmail4");
  var pw = document.getElementById("pw");
  var num = document.getElementById("num");
  var numregex = /^([0-9]{10})$/;
  var eregex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  var pregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  var flag1,
    flag2,
    flag3 = false;

  if (eregex.test(email.value)) {
    error1.innerText = "Valid";
    error1.style.color = "green";
    flag1 = true;
  }
  if (numregex.test(num.value)) {
    error2.innerText = "Valid";
    error2.style.color = "green";
    flag2 = true;
  }
  if (pregex.test(pw.value)) {
    error3.innerText = "Valid";
    error3.style.color = "green";
    flag3 = true;
  }

  if (flag1 && flag2 && flag3) {
    return true;
  } else {
    if (flag3 == false) {
      error3.innerText = "Your password must contain atleast 8 characters, atleast one uppercase letter,one lowercase letter and one number";
      error3.style.color = "red";
    }
    if (flag2 == false) {
      error2.innerText = "Invalid phone number";
      error2.style.color = "red";
    }
    if (flag1 == false) {
      error1.innerText = "Invalid email";
      error1.style.color = "red";
    }
    return false;
  }
}
