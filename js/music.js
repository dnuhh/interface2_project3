    var newApi = makeRequest();

    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.open('GET', 'https://api.deezer.com/user/me?access_token=frS7GnaPuv9dS3IndVAeg6T5Mj42L5WYZMlojQmZ4FQWR5Nwh1', true);
        httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
        httpRequest.onreadystatechange = alertContents();
        httpRequest.send(null);

    }

    function alertContents() {
        console.log(0);
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var result = JSON.parse(httpRequest.responseText);
                console.log(result);
                console.log(1);
            }
        }
    }
