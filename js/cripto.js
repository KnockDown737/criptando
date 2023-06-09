var encodedString;

function encrypt() {
    var baseString=document.getElementById('en').value;
    encodedString=window.btoa(baseString);
    document.getElementById('de').value=encodedString;

}

function decrypt(){
    var decodedString=window.atob(encodedString);
    document.getElementById('de').value=decodedString;
}

var btnCodificar = document.querySelector(".btn-codificar");
var btnDecodificar = document.querySelector(".btn-decodificar");

btnCodificar.onclick = function() {
    encrypt();
 
}

btnDecodificar.onclick = function() {
    decrypt();

}