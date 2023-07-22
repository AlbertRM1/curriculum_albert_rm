
document.getElementById('contactar').innerHTML = ('<h2>Contactar</h2><br><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><p id="movil">Telf: 629837327</p><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg><p id="correo">albertromart1@gmail.com</p><form action="https://formsubmit.co/albertromart1@gmail.com" method="POST" name="formulario" onsubmit="return validation()" action="confirmation.php" method="post"><div class="row" <label for="nombre">Nombre:</label><input type="text" onkeyup="return validarNombre()" id="nombre" class="nombre" name="nombre"placeholder="Name*" minlength="2" maxlength="30" pattern="[a-zA-Z\s]+"> <div class="error" id="errorNombre"></div></div><br><div class="row"><label for="email">Email:</label><input type="email" onkeyup="return validarEmail()" id="email" class="email" name="email"placeholder="Email*"><div class="error" id="errorEmail"></div></div><br><div class="row"><label for="message">Mensaje:</label><textarea name="message" id="message" class="message" cols="40" rows="10" required placeholder="¿En qué puedo ayudarte?*"></textarea></div><br><button type="submit" id="submit" class="submit" name="submit"><span class="button_submit">Enviar</span></button><input type="hidden" name="_next" value="https://albertrm1.github.io/cvalbertromero/curriculum.html"><input type="hidden" name="_captcha" value="false"></form>');

let NombreError = EmailError = true;

function iniciar(){
    document.formulario.nombre.value = localStorage.getItem("NombreForm");
    document.formulario.email.value = localStorage.getItem("EmailForm");
}

function mostrarError(id,txt) {
    document.getElementById(id).innerHTML = (txt);
}

function validarNombre() {
    var nombre = document.formulario.nombre.value;
    if (nombre === "") {    
        mostrarError("errorNombre", "ERROR: Campo nombre vacío");
    }
    else {
        mostrarError("errorNombre", "");

        var regex = /^[a-zA-Z\s]+$/;
        regex.test(nombre) === mostrarError("errorNombre","ERROR: Formato nombre inválido");mostrarError("errorNombre","");
    
        NombreError = false;

        localStorage.setItem("NombreForm", nombre);
    }
}

function validarEmail() {
    var email = document.formulario.email.value;
    if (email === "") {
        mostrarError("errorEmail","ERROR: Campo email vacío");
    }
    else {
        mostrarError("errorEmail","");
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;

        regex.test(email) === mostrarError("errorEmail","ERROR: Formato email inválido");mostrarError("errorEmail","");
    
        EmailError = false;

        localStorage.setItem("EmailForm", email);
    }
}

function validation(){
    if (!NombreError && !EmailError)
        return true;
        else {
            validarNombre();
            validarEmail();
            return false;
        }
}

window.addEventListener("load", iniciar);