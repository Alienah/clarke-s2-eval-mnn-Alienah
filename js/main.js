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

function compare (){
  var numIntroducido = document.getElementById('number-input').value;
  var numIntroducido = parseInt (numIntroducido);
  var tracks = document.getElementById('result');
  if (numIntroducido===numberPlayed){
    tracks.innerHTML='Has acertado';
} else if (numIntroducido < numberPlayed){
  tracks.innerHTML='El número que has introducido es menor que el número secreto';
} else if (numIntroducido > numberPlayed){
  tracks.innerHTML='El número que has introducido es mayor que el número secreto';
}
}


buttonInput.addEventListener('click', compare);

/*
var contador = {inicial:0,
								actual:0,
								minimo:0,
								maximo:100,
								counting:function() {
									if(contador.actual < contador.maximo){
										contador.actual++;
									}
	document.getElementById('counter').innerHTML= contador.actual;

								}

};
contador.counting();*/
