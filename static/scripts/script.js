// JavaScript Document
// GET BUTTON TO OPEN MODAL
const btn = document.getElementById('btn');	
// GET MODAL
const modal = document.getElementById('jump-links');
// GET CLOSE BUTTON
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
// CLICK CLOSE

[...close].forEach((close) => {
    close.onclick = () => (modal.style.display = 'none');
});
//close.addEventListener('click', closeModal);



//function openModal(){
  //modal.style.display = 'block';
//}
