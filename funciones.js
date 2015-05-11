//llama a la funcion al tocar el boton
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
$("#boton").click(function(){	
sacarfoto();
});
}

function sacarfoto(){
navigator.camera.getPicture(onSuccess, onFail, { 
//sintaxis jason, variables con valores
quality: 100,
destinationType: Camera.DestinationType.DATA_URL
});
}

//cuando logra sacar la foto entra aca
function onSuccess(imageConvertida) {
    var image = document.getElementById('mi_imagen');
    image.src = "data:image/jpeg;base64," + imageConvertida;
}

//cuando no se logra sacar la foto entra aca
function onFail(error) {
    alert('Failed because: ' + error);
}
