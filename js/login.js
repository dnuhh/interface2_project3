function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username + password);

    if (username == "name" && password == "1") {
        alert("Login successful");
        window.location = "pages/profile.html";
        //here user shoul be redirected 
    } else {
        console.log(3);
        alert("Try again");
        username = document.getElementById("username").value = "Enter Username";
        password = document.getElementById("password").value = "Enter Password";
    }
    if (document.getElementById("remember").checked==true) 
    {

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function checkCookie() {
            var user = getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
            } else {
                user = prompt("Please enter your name:", "");
                if (user != "" && user != null) {
                    setCookie("username", user, 30);
                }
            }
        }

    }
}
