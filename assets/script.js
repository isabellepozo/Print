const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Déclarer les constantes et variables
const bulletPoints = document.querySelector('.dots');
const bannerImage = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
let activeSlideIndex = 0; 

// Ajout des Event Listeners sur les flèches
const arrows = document.querySelectorAll('.arrow');

