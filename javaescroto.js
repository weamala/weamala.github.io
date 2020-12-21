//la aca
var contadogalleta=0;
document.getElementById("gallet").onclick=function(){
    contadogalleta=contadogalleta+1;
    console.log(contadogalleta);
    actcontador();
    
}

function actcontador(){
document.getElementById("numlletas").innerHTML =contadogalleta;
}


var tam=420;
document.getElementById("imagen").width = tam;
document.getElementById("imagen").height=tam;