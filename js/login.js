function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "name" && password == "1") {
        alert("Login successful");
//        window.location = "pages/profile.html";
        //here user shoul be redirected 
    } else {
        document.getElementById("wrongPass").style.display="block";
        document.getElementById("wrongPass").innerHTML="Wrong credentials. Plaesse try again";
        username = document.getElementById("username").value = "Enter Username";
        password = document.getElementById("password").value = "Enter Password";
    }
}

