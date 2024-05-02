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
    
    if (contraseña !== confirmarContraseña) {
        responseMessage.innerText = "Las contraseñas no coinciden";
        return;
    }

    var userData = {
        nombre: nombre,
        email: email,
        contraseña: contraseña,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento
    };

    if (direccion !== "") {
        userData.direccion = direccion;
    }

    responseMessage.innerText = "Datos guardados:\n";
    for (var key in userData) {
        if (userData.hasOwnProperty(key)) {
            responseMessage.innerText += key + ": " + userData[key] + "\n";
        }
    }
}
