const slider = document.querySelector("#slider");
let slider__section = document.querySelectorAll(".slider__section");
let slider__sectionLast = slider__section[slider__section.length -1];

const btnr = document.querySelector("#btnr");
const btnl = document.querySelector("#btnl");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next () {
	let slider__sectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginleft = "-200%";
	slider.style.transition = "all 0.5s";

	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend', slider__sectionFirst);
		slider.style.marginleft = "-100%";
	}, 500)
}

btnr.addEventListener('click', function(){
	Next();
}