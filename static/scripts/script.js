// JavaScript Document
// GET BUTTON TO OPEN NAV MODAL
const btn = document.getElementById('btn');	
// GET NAV MODAL
const modal = document.getElementById('jump-links');
// GET MULTIPLE CLOSE BUTTONS
const close = document.getElementsByClassName('close');

// SHOW NAV MODAL
const openModal = () => {
	modal.style.display = 'block';
}

//CLOSE NAV MODAL
const closeModal = () => {
	modal.style.display = 'none';
}

// CLICK TO OPEN
btn.addEventListener('click', openModal);
// CLICK CLOSE ON MULTIPLE LOCATIONS - ANY OUTSIDE OF THE NAV OR NAV MODAL
[...close].forEach((close) => {
    close.onclick = () => (modal.style.display = 'none');
});

//GET JUMP LINKS SECTION
const main = document.querySelector('main');
// GET SECTION AFTER JUMP LINKS
const end = document.querySelector('#end-stick');
// WHEN MAIN SECTION REACHES TOP
const mainTop = main.offsetTop;
// WHEN SECTION AFTER JUMP LINKS REACHES TOP
const second = end.offsetTop;

// IF THE NAV REACHES THE TOP OF THE SCREEN, KEEP IT THERE UNTIL IT ENTERS THE SECTION AFTER THE JUMP LINKS
// ADD SCROLL BAR BROGRESS
const makeStick = () => {
	if (window.scrollY >= mainTop && window.scrollY <= second) {
		document.body.classList.add('sticky')
	} else  {
		document.body.classList.remove('sticky');
	}
}

//VARIABLES FOR TEXT CHANGE
let one = document.querySelector('#one-txt');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let oneTop = one.offsetTop;
let twoTop = two.offsetTop;
let threeTop = three.offsetTop;
let fourTop = four.offsetTop;
let pCont = document.getElementById('text');

// FUNCTION TO CHANGE NAV SECTION TEXT
const section = () => {
	if (window.scrollY >= oneTop && window.scrollY <= twoTop) {
		pCont.innerText = "First Things Second";
	} else if (window.scrollY >= twoTop && window.scrollY <= threeTop) {
		pCont.innerText = "First Second Third Things Third";
	} else if (window.scrollY >= threeTop && window.scrollY <= fourTop) {
		pCont.innerText = "Seven";
	} else if (window.scrollY >= fourTop && window.scrollY <= second) {
		pCont.innerText = "Last Things First";
	} else {
		pCont.innerText = "First Thing's First";
	}
}
// NOW WORKING
const scrollProgress = document.getElementById('scroll-progress')

const progress = () => {
    const scroll = main.scrollTop;
    const height = main.scrollHeight - main.clientHeight;
    const percent = (scroll / height) * 100;
    scrollProgress.style.width = percent + "%";
}
/*
//SCROLL PROGRESS FOR WHOLE PAGE. NOT RIGHT BUT SHOWS PROGRESS BAR FILLING.
const progress = () => {
	let scroll = document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrollProgress = (scroll / height) * 100;
	document.getElementById("scroll-progress").style.width = scrollProgress + "%";
}*/

main.addEventListener('scroll', progress);

// RUN TEXT FUNCTION ON SCROLL
window.addEventListener('scroll', section);

// RUN FUNCTION TO STICK AND UNSTICK NAV ON SCROLL
window.addEventListener('scroll', makeStick);