const icon1 = document.querySelector('#icon1');
const icon2 = document.querySelector('#icon2');

icon1.addEventListener('click', () => {
	icon1.classList.toggle('isOpen');
});

icon2.addEventListener('click', () => {
	icon2.classList.toggle('isOpen');
});
