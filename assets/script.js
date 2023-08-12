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
// Déclarer les constantes et variable
const bulletPoints = document.querySelector('.dots');
const bannerImage = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
let activeSlideIndex = 0; 

// Ajout des Event Listeners sur les flèches
const arrows = document.querySelectorAll('.arrow');
arrows.forEach(function(arrow) {
	arrow.addEventListener('click', function() {
		if (arrow.classList.contains('arrow_left')) {
			activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
		} else if (arrow.classList.contains('arrow_right')) {
			activeSlideIndex = (activeSlideIndex + 1) % slides.length;
		}
		updateSlide(activeSlideIndex);  
		});
	});

// Ajout des Bullet Points
for (let i = 0; i < slides.length; i++) {
	const bullet = document.createElement('div');	
	bullet.classList.add('dot');
	bullet.setAttribute('data-index', i); 
	bullet.addEventListener('click', function() {
	  const clickedIndex = parseInt(bullet.getAttribute('data-index'));
	  updateSlide(clickedIndex); 
	});
	bulletPoints.appendChild(bullet);
  }

  // Fonction mise à jour des éléments visuels
function updateSlide(slideIndex) {
	activeSlideIndex = slideIndex; // Mettez à jour l'index actif
	const slide = slides[activeSlideIndex];
	bannerImage.src = `assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;
	const bullets = bulletPoints.querySelectorAll('.dot');
	bullets.forEach((bullet, index) => {
	  if (index === activeSlideIndex) {
		bullet.classList.add('dot_selected');
	  } else {
		bullet.classList.remove('dot_selected');
	  }
	});
  }
 
updateSlide(activeSlideIndex);  
