
var en = document.getElementById('enviar');
en.onclick=function (){
  if(document.getElementsByTagName("input").length==0){
    alert("Porfavor ingrese los datos solicitados");+
    console.log(document.getElementsByTagName("input").length==0);
  }

  var nombre      = document.getElementById('nombre').value;
  var apellido    = document.getElementById('apellido').value;
  var dni         = document.getElementById('dni').value;
  var direccion   = document.getElementById('direccion').value;
  var printAll    = document.getElementById('printAll');
  var formulario  = document.getElementsByName('formulario')[0];

if(nombre !="" && apellido !="" && dni !="" && direccion !="" ){
  printAll.innerHTML=( "<ul><li>Nombre:"     + nombre      + "<br>"   +
                      "<li>Apellidos: " + apellido    + "<br>"   +
                      "<li>DNI: "       + dni         + "<br>"   +
                      "<li>Direccion: " + direccion)+"<ul>";

formulario.reset();
}

}
