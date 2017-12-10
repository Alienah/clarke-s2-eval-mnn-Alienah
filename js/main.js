'use strict';
var numberPlayed;
//Generar un número aleatorio entre 1 y 100
newNumber();
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Función que incluye el máximo y el mínimo.
}
function newNumber(){
	//Llamamos a la función para generar nuestro número entre 1 y 100
	numberPlayed = getRandomIntInclusive(1, 100);
	console.log(numberPlayed);
}

var buttonInput = document.querySelector('.button-input');
var triesNumber = document.querySelector('.counting-number');
var counting = 0;
var inputSave = document.querySelector('.input-name-form');
var tracks = document.getElementById('result');

function compare (){
	var numIntroduced = document.getElementById('number-input').value;
	var numIntroduced = parseInt (numIntroduced);

	if (numIntroduced===numberPlayed){
		tracks.innerHTML='Has acertado!';
		tracks.classList.add('great');
		//Y te sale la pantalla para guardar
		inputSave.classList.add('show');

	} else if (numIntroduced > 100 || numIntroduced < 0){
		tracks.innerHTML='El número debe ser comprendido entre 1 y 100';
	} else if (numIntroduced < numberPlayed){
		tracks.innerHTML='El número que has introducido es menor que el número secreto';
	} else if (numIntroduced > numberPlayed){
		tracks.innerHTML='El número que has introducido es mayor que el número secreto';
	} else {
		tracks.innerHTML='Error. Tienes que introducir un número entre el 1 y el 100';
	}
	counting ++;
	triesNumber.innerHTML= counting;
}

buttonInput.addEventListener('click', compare);

//Para mostrar las pistas la primera vez
var tracksSection = document.querySelector('.pistas');
function showTracks() {
	tracksSection.classList.add('show');
}
buttonInput.addEventListener('click', showTracks);

//Para guardar en el histórico
function savePunctuation() {
	var player = {
								name: document.getElementById("name-input").value,
								tries: counting,
							};
	var itemData = '<li class="item-data">' + player.name + ' - ' + player.tries + ' intentos.</li>'
	var placeForData = document.getElementById('lista');
	placeForData.insertAdjacentHTML('beforeend', itemData);

	inputSave.classList.remove('show');
	tracksSection.classList.remove('show');
	tracks.classList.remove('great');
	newNumber();
	counting = 0;
	triesNumber.innerHTML= counting;
	document.getElementById('number-input').value = '';
	document.getElementById("name-input").value = '';
}

var buttonName = document.querySelector('.name-button');
buttonName.addEventListener('click', savePunctuation);
