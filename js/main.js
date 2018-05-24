let cat = document.getElementById('cat'), 
	counterText = document.getElementById('counter-text'), 
	counter = 0;

cat.addEventListener('mousedown', function() {
	counter += 1;
	counterText.innerText = counter; 
	cat.setAttribute('src', 'img/cat-click.svg');
});

cat.addEventListener('mouseup', function() {
	cat.setAttribute('src', 'img/cat.svg');
});


