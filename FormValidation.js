function validationCheck(form){
  var emailCheck = form.email.value;
  var ageCheck = form.age.value;
  var atPos = emailCheck.indexOf("@");
  var perPos = emailCheck.lastIndexOf(".");
  var firstName = form.firstname.value;
  var lastName = form.lastname.value;
  var phoneNum = form.tel.value;

  if (firstName == "")
  {
    alert("You need to enter your first name");
    form.firstname.focus();
    return false;
  }
  if (lastName == "")
  {
    alert("You need to enter your last name");
    form.lastname.focus();
    return false;
  }
  if (ageCheck < 18)
  {
    alert("Must be 18 years of age!");
    form.age.focus();
    return false;
  }
  if (atPos < 1 || (perPos - atPos < 2))
  {
    alert("Please enter correct email");
    form.email.focus();
    return false;
  }
  if (phoneNum == "")
  {
    alert("Phone number is not correct");
    form.tel.focus();
    return false;
  }
  return true;
}
