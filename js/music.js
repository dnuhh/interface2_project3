const Http = new XMLHttpRequest();
const url = 'https://api.deezer.com/version/service/id/method/?parameters';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        console.log(Http.responseText)
    }
}
var data = JSON.parse(this.Http)