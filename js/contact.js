function CheckThongTin() {
    var name = document.getElementById("HoTen").value;
    var testName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

    var email = document.getElementById("Email").value;
    var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!testName.test(name) || name.length < 2)
        alert("Error: Full Name");
    else if (testEmail.test(email) == false)
        alert("Email is malformed");
    else {
        alert("Submitted");
    }
}
