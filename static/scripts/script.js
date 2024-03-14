// JavaScript Document
// GET BUTTON TO OPEN MODAL
const btn = document.getElementById('btn');	
// GET MODAL
const modal = document.getElementById('jump-links');
// GET MULTIPLE CLOSE BUTTONS
const close = document.getElementsByClassName('close');

// SHOW MODAL
const openModal = () => {
	modal.style.display = 'block';
}

//CLOSE MODAL
const closeModal = () => {
	modal.style.display = 'none';
}

// CLICK TO OPEN
btn.addEventListener('click', openModal);
// CLICK CLOSE ON MULTIPLE LOCATIONS
[...close].forEach((close) => {
    close.onclick = () => (modal.style.display = 'none');
});

//GET JUMP LINKS SECTION
const main = document.querySelector('#main');
// GET SECTION AFTER JUMP LINKS
const end = document.querySelector('#end-stick');
// WHEN MAIN SECTION REACHES TOP
const mainTop = main.offsetTop;
// WHEN SECTION AFTER JUMP LINKS REACHES TOP
const second = end.offsetTop;

const makeStick = () => {
	if (window.scrollY >= mainTop && window.scrollY <= second) {
		document.body.classList.add('sticky');
	} else  {
		document.body.classList.remove('sticky');
	}
}

window.addEventListener('scroll', makeStick);

