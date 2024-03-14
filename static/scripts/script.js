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
// CLICK CLOSE ON MULTIPLE LOCATIONS - ANY OTSIDE OF THE NAV OR MODAL
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

 
const progress = () => {
	let scroll = document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrollProgress = (scroll / height) * 100;
	document.getElementById("scroll-progress").style.width = scrollProgress + "%";
}

// IF THE NAV REACHES THE TOP OF THE SCREEN, KEEP IT THERE UNTIL IT ENTERS THE SECTION AFTER THE JUMP LINKS
const makeStick = () => {
	if (window.scrollY >= mainTop && window.scrollY <= second) {
		document.body.classList.add('sticky')
        progress('#main');
	} else  {
		document.body.classList.remove('sticky');
	}
}

let one = document.querySelector('#one-txt');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let oneTop = one.offsetTop;
let twoTop = two.offsetTop;
let threeTop = three.offsetTop;
let fourTop = four.offsetTop;
let pCont = document.getElementById('text');

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
window.addEventListener('scroll', section);

window.addEventListener('scroll', makeStick);