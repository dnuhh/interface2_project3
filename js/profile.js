document.getElementById("logOutButton").addEventListener("click", logOutAlert);
function logOutAlert(){
    document.getElementById("transparentBackground").style.display="block";
    document.getElementById("logOutAlert").style.display="block";
}
document.getElementById("logOutcancel").addEventListener("click", logOutAlertRemove);
function logOutAlertRemove(){
    document.getElementById("logOutAlert").style.display="none";
     document.getElementById("transparentBackground").style.display="none";
}