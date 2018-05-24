const cats = Array.from(document.querySelectorAll('.cat')), 
	counterText = document.getElementById('counter-text'); 
let	counter = 0;



function flash(e) {
	e.target.setAttribute('src', 'img/cat.svg');
}

cats.forEach(function(cat, index){
	cat.addEventListener('mousedown', function(e) {
		counter += 1;
		counterText.innerText = counter; 
		e.target.setAttribute('src', `img/cat${index}-click.svg`);
	});
	cat.addEventListener('mouseup', function(e) {
		e.target.setAttribute('src', `img/cat${index}.svg`);
	});
});



//Array.from('cat', c => c.addEventListener('mouseup', increment));
