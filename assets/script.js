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

// Initialize the current slide index
let currentSlide = 0;

// Function to update the displayed slide and dot indicators
function updateSlide() {
	// Change the image and tag line
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[currentSlide].image;
	document.querySelector("#banner p").innerHTML = slides[currentSlide].tagLine;
  
	// Update the dot indicators
	dotCreate();
  }