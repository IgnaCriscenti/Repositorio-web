const formulario = document.querySelector("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const confirm_contrasena = document.getElementById("confirm-contrasena");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const ciudad = document.getElementById("ciudad");
const cod_post = document.getElementById("cod-post");
const dni = document.getElementById("dni");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

function clearError(event){
    console.log("focus");
    event.target.nextElementSibling.textContent = "";
}

nombre.addEventListener("focus", clearError);
email.addEventListener("focus", clearError);
contrasena.addEventListener("focus", clearError);
confirm_contrasena.addEventListener("focus", clearError);
edad.addEventListener("focus", clearError);
telefono.addEventListener("focus", clearError);
direccion.addEventListener("focus", clearError);
ciudad.addEventListener("focus", clearError);
cod_post.addEventListener("focus", clearError);
dni.addEventListener("focus", clearError);

nombre.addEventListener("blur", function() {
    if(nombre.value.length === 0) {
        nombre.nextElementSibling.textContent = "El nombre es obligatorio.";
    } else if(nombre.value.length <= 6){
        nombre.nextElementSibling.textContent = "Debe tener más de 6 letras.";
    } else if (!nombre.value.includes(" ")){
        nombre.nextElementSibling.textContent = "Debe contener al menos un espacio. (nombre y apellido).";
    }
});


email.addEventListener("blur", function() {
    if (!email.value.includes("@") || !email.value.includes(".com")){
        email.nextElementSibling.textContent = "Debe tener un formato de email válido.";
    }
});

contrasena.addEventListener("blur", function() {
    if(contrasena.value.length < 8){
        contrasena.nextElementSibling.textContent = "Debe tener más de 8 letras.";
    } else if(!tieneLetras(contrasena.value) || !tieneNumeros(contrasena.value)){
        contrasena.nextElementSibling.textContent = "Debe contener tanto letras como números.";
    }
});

function tieneLetras(texto) {return /[a-z]/i.test(texto);}
function tieneNumeros(texto) {return /[0-9]/.test(texto);}

confirm_contrasena.addEventListener("blur", function() {
    if(confirm_contrasena.value.length != contrasena.value.length){
        confirm_contrasena.nextElementSibling.textContent = "Las contraseñas no coinciden.";
    }
});

edad.addEventListener("blur", function() {
    if(edad.value < 18){
        edad.nextElementSibling.textContent = "Solo disponible para mayores de 18 años.";
    }
});

telefono.addEventListener("blur", function() {
    if(telefono.value.length < 7){
        telefono.nextElementSibling.textContent = "El número de teléfono tiene que tener al menos 7 dígitos.";
    } else if (tieneLetras(telefono.value) || telefono.value.includes(" ") || telefono.value.includes("-") || telefono.value.includes("(") ||
        telefono.value.includes("_") || telefono.value.includes(")") || telefono.value.includes("{") || telefono.value.includes("}") ||
        telefono.value.includes("[") || telefono.value.includes("]") || telefono.value.includes("/") || telefono.value.includes("!")){
            telefono.nextElementSibling.textContent = "No debe contener espacios, guiones, letras ni paréntesis.";
    }
});

direccion.addEventListener("blur", function() {
    if(direccion.value.length < 5){
        direccion.nextElementSibling.textContent = "Debe tener al menos 5 caracteres.";
    } else if (!direccion.value.includes(" ")){
        direccion.nextElementSibling.textContent = "Debe contener al menos un espacio. (calle y número).";
    } else if(!tieneLetras(direccion.value) || !tieneNumeros(direccion.value)){
        direccion.nextElementSibling.textContent = "La dirección debe contener tanto letras como números.";
    }
});

ciudad.addEventListener("blur", function() {
    if(ciudad.value.length < 3){
        ciudad.nextElementSibling.textContent = "Debe tener al menos 3 caracteres.";
    }
});

cod_post.addEventListener("blur", function() {
    if(cod_post.value.length < 3){
        cod_post.nextElementSibling.textContent = "Debe tener al menos 3 caracteres.";
    }
});

dni.addEventListener("blur", function() {
    const valorDni = dni.value.toString();
    if(valorDni.length < 7 || valorDni.length > 8 || valorDni.includes(".")){
        dni.nextElementSibling.textContent = "Debe tener entre 7 u 8 dígitos sin puntos.";
    }
});


