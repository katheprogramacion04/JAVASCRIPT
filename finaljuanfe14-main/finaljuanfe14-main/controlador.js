let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()

    let cajaUsaurio=document.getElementById("cajausuario")
    let cajaCorreo=document.getElementById("cajacorreo")
    let cajaCiudad=document.getElementById("cajaciudad")
    let cajaTelefono=document.getElementById("cajatelefono")
    let cajaContraseña=document.getElementById("cajacontraseña")

    let datosDelFormulario={
        usuario:cajaUsaurio.value,
        correo:cajaCorreo.value,
        ciudad:cajaCiudad.value,
        telefono:cajaTelefono.value,
        contraseña:cajaContraseña.value,

    }

    Swal.fire({
  title: "Bienvenido!",
  text: "Has sido registrado",
  icon: "success"
});

})