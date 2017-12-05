'use strict';
//Generar un número aleatorio entre 1 y 200

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Función que incluye el máximo y el mínimo.
}

//Llamamos a la función para generar nuestro número
var numberPlayed= getRandomIntInclusive(1, 200);
console.log(numberPlayed);

var buttonInput =document.querySelector('.button-input');
var triesNumber =document.querySelector('.counting-number');
var counting = 0;

function compare (){
  var numIntroducido = document.getElementById('number-input').value;
  var numIntroducido = parseInt (numIntroducido);
  var tracks = document.getElementById('result');
  if (numIntroducido===numberPlayed){
    tracks.innerHTML='Has acertado';
		//Y te sale la pantalla para guardar
		var inputSave = document.querySelector('.input-name-form');
		inputSave.classList.add('show');

} else if (numIntroducido > 200 || numIntroducido < 0){
	tracks.innerHTML='El número debe ser comprendido entre 1 y 200';
} else if (numIntroducido < numberPlayed){
  tracks.innerHTML='El número que has introducido es menor que el número secreto';
} else if (numIntroducido > numberPlayed){
  tracks.innerHTML='El número que has introducido es mayor que el número secreto';
} else {
	tracks.innerHTML='Error. Tienes que introducir un número entre el 1 y el 200';
}
counting ++;
	triesNumber.innerHTML= counting;
}
buttonInput.addEventListener('click', compare);

//Para mostrar las pistas la primera vez
function mostrarPistas () {
	var tracksSection = document.querySelector('.pistas');
	tracksSection.classList.add('show');
}
buttonInput.addEventListener('click', mostrarPistas);
