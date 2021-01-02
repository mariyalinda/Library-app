function validate() {
  var flag = false;
  var user = document.getElementById("username");
  var pw = document.getElementById("pw");
  if (user.value == "admin") {
    if (pw.value == "12345") {
      return true;
    } else {
      error2.innerText = "Invalid password";
      error2.style.color = "red";
      error1.innerText = "Valid username";
      error1.style.color = "green";
    }
  } else {
    error1.innerText = "Invalid username";
    error1.style.color = "red";
  }
  return false;
}

function infocheck() {
  var email = document.getElementById("inputEmail4");
  var num = document.getElementById("mobnum");
  var title = document.getElementById("title");
  var authorname = document.getElementById("authorname");
  var place = document.getElementById("place");
  var genre = document.getElementById("genre");
  if (
    /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/.test(
      email.value
    )
  ) {
    if (/^([0-9]{10})$/.test(num.value)) {
      if (
        title.value.trim().length > 1 &&
        authorname.value.trim().length > 2 &&
        place.value.trim().length > 2 &&
        genre.value.trim().length > 2
      ) {
        return true;
      }
    } else {
      error2.innerText = "Invalid mobile number";
      error2.style.color = "red";
      return false;
    }
  } else {
    error1.innerText = "Invalid email";
    error1.style.color = "red";
    return false;
  }
}
