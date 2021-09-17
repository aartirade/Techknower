function submit1() {
  var name = document.getElementById("floatingName").value;
  var phone = document.getElementById("floatingPhone").value;
  var email = document.getElementById("floatingInput").value;

  if (name == "") {
    alert("Please Fill your Form First");
  } else if (phone == "") {
    alert("Please Fill your Form First");
  } else if (email == "") {
    alert("Please Fill your Form First");
  } else {
    alert("Your form has submitted Sucessfully");
  }
}
