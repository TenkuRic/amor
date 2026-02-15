

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

Este día especial, lamentablemente, no lo pasé contigo por la gran distancia que nos separa, pero eso no quiere decir que no lo vayamos a celebrar.

Ya casi es un año y medio de relación, y han sido los mejores momentos de mi vida. 

Hubo peleas, hubo tristezas, hubo felicidad y también momentos de mucho significado para nosotros.

Es un largo camino el que hemos recorrido y, sinceramente, para mí valió completamente la pena. Este año viene con muchas sorpresas para nosotros. No solo por la libertad que te va a llegar, sino también las maravillas que lograremos ahora juntos: vivir juntos, trabajar y tener un pequeño espacio llamado hogar.

Estoy muy emocionado por volver a verte, y sé que pronto nosotros estaremos dormidos como bebés en la cama de nuestra pequeña y alquilada "casa"...

Sé que este detalle es muy poco en comparación de lo que debería hacer o demostrarte. 

Es un poco injusto, lo se, pero hago mi pequeño esfuerzo para que se note que no estoy dejando pasar este día. 

Por eso, mañana temprano te enviaré el dinerito para que compres ese lindo vestido que te taaanto te gustó. 

Tenía algo preparado para enviarte por Shalom, pero prefiero dártelo cuando vengas aquí. 

Estoy seguro de que te va a gustar mucho… solo espera el día en que vengas. Te amo mucho.

Disfruta este día con tus amigas, lo mereces. Eres tan, pero tan linda y chambeadora que me encanta. Alguien tan bella como tú debe ser tratada como toda una reina.

Te amo demasiado. Feliz San Valentín, mi amor. ❤️`;



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

