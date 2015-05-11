



function sacafoto(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
});}/* el codifgo entre llaves es sintaxis jason. variables ocn valores*/

function onSuccess(imageData) {
    var image = document.getElementById('mi_imagen');
    image.src = "data:image/jpeg;base64," + imageData; /*que el atributo source sea igual a este comienzo de foto: la foot en datos esta escrita asi. el getpictura lo que le tira la funcion onsucceses es el codigo de la foto*/
}

function onFail(message) {
    alert('Failed because: ' + message);
}
