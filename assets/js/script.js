var json = fetch('/curriculum_albert_rm/assets/json/data.json')
.then(response => response.json())
.then(respuesta => {
    document.getElementById("nombre").innerHTML = respuesta.nombre;
    document.getElementById("intro").innerHTML = respuesta.sobremi;
    document.getElementById("obj").innerHTML = respuesta.objetivo;

// JSON DE IDIOMAS
    let idiomasHTML = "";
    for (let i = 0; i < respuesta.idiomas.length; i++) {
        let idiomas = respuesta.idiomas[i];
        let itemHTML ="<br><li><strong><h4 class='animate__animated animate__lightSpeedInRight'>" + idiomas.idioma + "</h4></strong>" + "<strong>Hablado</strong> - " + idiomas.hablado + " |<strong>Escrito</strong> - " + idiomas.escrito + " |<strong>Entendido</strong> - " + idiomas.entendido + " |<strong>Nativo</strong> - " +  idiomas.nativo + "</li>";
        idiomasHTML += itemHTML;
    }
    document.getElementById("idiomas").innerHTML = idiomasHTML;

// JSON DE HARD SKILLS
    let hardHTML = "";
    for (let i = 0; i < respuesta.hardskills.length; i++) {
        let hard = respuesta.hardskills[i];
        let itemHTML ="<br><li><strong><h4>Frontend: </h4></strong><h5>" + hard.frontend + "</h5><br><br><strong><h4>Backend: </h4></strong><h5>" + hard.backend + "</h5><br><br><strong><h4>Bases de Datos: </h4></strong><h5>" + hard.bbdd + "</h5><br><br><strong><h4>Sistemas Operativos: </h4></strong><h5>" + hard.so + "</h5><br><br><strong><h4>Informática: </h4></strong><h5>" + hard.informatica + "</h5></li>";
        hardHTML += itemHTML;
    }
    document.getElementById("hard").innerHTML = hardHTML;

// JSON DE SOFT SKILLS
let softHTML = "";
for (let i = 0; i < respuesta.softskills.length; i++) {
    let soft = respuesta.softskills[i];
    let itemHTML ="<br><li><h4>" + soft.prim + "</h4>" + "<br><br><h4>" + soft.segu + " </h4>" + "<br><br><h4>" + soft.terc + "</h4>" + "<br><br><h4>" + soft.cuar + "</h4>" + "<br><br><h4>" + soft.quin + "</h4>" + "<br><br><h4>" + soft.sext + "</h4></li>";
    softHTML += itemHTML;
}
document.getElementById("soft").innerHTML = softHTML;

// JSON DE ESTUDIOS
let estudiosHTML = "";
    for (let i = 0; i < respuesta.estudios.length; i++) {
        let estudios = respuesta.estudios[i];
        let itemHTML = "<br>" + "<li><h4><strong>" + estudios.curso + "</strong></h4><h5>" + estudios.instituto + "<strong> - " + estudios.ubicacion + "</strong>" + " (" + estudios.f_start + " / " + estudios.f_end + ")</h5></li><br>";
        estudiosHTML += itemHTML;
    }
    document.getElementById("exp").innerHTML = estudiosHTML;
});

document.querySelector('footer').innerHTML = 'Curriculum web <input class="timepage" size="5" id="timespent" name="timespent" disabled><br><button type="" id="dark" class="dark">OSCURO</button><div class="huevo" id="egg"><a href="https://swapi.dev/" target="_blank"></div><div id="date"></div><div id="contacto"><a class="linkedin" id="linkedin" href="https://www.linkedin.com/in/albert-romero-martinez-arm/" target="_blank"></a><br><a class="github" id="github" href="https://github.com/AlbertRM1" target="_blank"></a><a class="mail" id="mail" href="mailto:albertromart1@gmail.com" target="_blank"></a><a class="telf" id="telf" href="tel:629837327" target="_blank"></a></div>';

startday=new Date();clockStart=startday.getTime();function initStopwatch(){var myTime=new Date();return((myTime.getTime()-clockStart)/1000);
}
function getSecs(){var tSecs=Math.round(initStopwatch());var iSecs=tSecs%60;var iMins=Math.round((tSecs-30)/60);var sSecs=""+((iSecs>9)?iSecs:"0"+iSecs);var sMins=""+((iMins>9)?iMins:"0"+iMins);document.getElementById('timespent').value=sMins+":"+sSecs;window.setTimeout('getSecs()',1000);}
window.onload = function(){window.setTimeout('getSecs()',1);
};

const dark = document.querySelector('#dark');
const body = document.querySelector('body');
(dark).click(function(){
    body.classList.toggle('darkmode');
})
dark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
})