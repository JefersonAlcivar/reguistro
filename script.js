document.getElementById("clientForm").addEventListener("submit", function(event) {
    event.preventDefault();
    guardarDatos();
});

function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("Contraseña").value;
    var confirmarContraseña = document.getElementById("ConfirmarContraseña").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var responseMessage = document.getElementById("responseMessage");
    
    // Validar que las contraseñas coincidan
    if (contraseña !== confirmarContraseña) {
        responseMessage.innerText = "Las contraseñas no coinciden";
        return;
    }

    // Crear un objeto con los datos del formulario
    var userData = {
        nombre: nombre,
        email: email,
        contraseña: contraseña,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento
    };

    // Agregar dirección al objeto si se proporciona
    if (direccion !== "") {
        userData.direccion = direccion;
    }

    // Mostrar los datos guardados
    responseMessage.innerText = "Datos guardados:\n";
    for (var key in userData) {
        if (userData.hasOwnProperty(key)) {
            responseMessage.innerText += key + ": " + userData[key] + "\n";
        }
    }
}
