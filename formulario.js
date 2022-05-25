const formulario = document.getElementById('formulario');
var nombre = document.getElementsByName('nombre');
var error = document.getElementsByName ('error');

function enviarFormulario()
{

    var mensajesError= [];

    if(nombre.value === null || nombre.value === '')
    {
        mensajesError.push('ingresa un nombre valido');
    }   

    error.innerHTML = mensajesError.join ('. ');

    return false;
}