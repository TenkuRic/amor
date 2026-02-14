

// CONTADOR

const inicio=new Date("2024-09-01 00:00:00");


setInterval(()=>{

const ahora=new Date();

const diff=ahora-inicio;


const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor(diff/1000/60/60)%24;
const m=Math.floor(diff/1000/60)%60;
const s=Math.floor(diff/1000)%60;


document.getElementById("contador").innerHTML=

`${d} días ${h}h ${m}m ${s}s juntos ❤️`;

},1000);




// MUSICA


const musica=document.getElementById("musica");

const btn=document.getElementById("btnMusica");


function toggleMusica(){

if(musica.paused){

musica.play();

btn.innerHTML="⏸️ Pausar música";

}else{

musica.pause();

btn.innerHTML="🎵 Reproducir música";

}

}



// EFECTO CARTA


const mensaje=`Hola, mi cochinita hermosa. ❤️

Hoy es un día muy especial, y aunque la distancia nos separa físicamente, mi corazón está contigo en todo momento.

Quiero que sepas que cada día a tu lado, incluso en la distancia, ha sido uno de los regalos más hermosos que la vida me ha dado.

Ya casi es un año y medio desde que comenzamos este viaje juntos, y puedo decir con total seguridad que han sido los mejores meses de toda mi vida.

Hemos pasado por momentos difíciles, por tristezas, por peleas, pero también por momentos llenos de amor, risas y recuerdos que jamás olvidaré.

Todo ese camino, cada paso, cada esfuerzo… valió completamente la pena, porque fue contigo.

Estoy muy emocionado por el futuro que nos espera.

Por el día en que despertemos juntos.

Por el día en que tengamos nuestro propio espacio.

Nuestro propio hogar.

Nuestro pequeño mundo.

Sueño con dormir contigo, abrazarte, y saber que al despertar seguirás ahí.

Gracias por existir.

Gracias por amarme.

Gracias por elegir quedarte.

Eres una mujer increíble.

Hermosa.

Fuerte.

Trabajadora.

Valiente.

Y completamente maravillosa.

Me siento orgulloso de ti.

Y me siento el hombre más afortunado por tenerte.

Este detalle es pequeño, pero está hecho con todo mi corazón.

Porque tú mereces todo.

Mereces el mundo entero.

Y prometo pasar mi vida intentando dártelo.

Te amo más de lo que las palabras pueden explicar.

Más de lo que cualquier carta puede escribir.

Más de lo que cualquier página puede mostrar.

Te amo infinitamente.

Feliz San Valentín, mi amor. ❤️`;



let i=0;


function iniciarCarta(){

document.getElementById("textoCarta").innerHTML="";

escribir();

}


function escribir(){

if(i<mensaje.length){

document.getElementById("textoCarta").innerHTML+=mensaje.charAt(i);

i++;

setTimeout(escribir,40);

}

}



// CORAZONES


setInterval(()=>{

let heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

document.querySelector(".corazones").appendChild(heart);

setTimeout(()=>heart.remove(),10000);

},300);



// CONFIGURA EL NOMBRE CORRECTO

const nombreCorrecto="Jose"; // cambia esto

function verificarNombre(){

let nombre=document.getElementById("inputNombre").value;

if(nombre.toLowerCase()==nombreCorrecto.toLowerCase()){


// ocultar pantalla inicio

document.getElementById("pantallaInicio").style.display="none";


// mostrar bienvenida

let bienvenida=document.getElementById("bienvenida");

let texto=document.getElementById("textoBienvenida");


texto.innerHTML=nombre;


bienvenida.style.opacity="1";

bienvenida.style.pointerEvents="all";


// reproducir musica

musica.play();
btn.innerHTML="⏸️ Pausar música";


// ocultar bienvenida despues

setTimeout(()=>{

bienvenida.style.opacity="0";

bienvenida.style.pointerEvents="none";

},5000);


}else{

document.getElementById("error").innerHTML="Nombre incorrecto ❤️";

}

}

