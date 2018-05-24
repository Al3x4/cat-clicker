let cat = document.getElementById('cat'), 
	counterText = document.getElementById('counter'), 
	counter = 0;

cat.addEventListener('click', () => {
	console.log('click');
	counter += 1;
	counterText.innerText = counter; 

});
