const 	cats = Array.from(document.querySelectorAll('.cat')), 
counters = Array.from(document.querySelectorAll('.counter')); 

cats.forEach(function(cat, index){
	//start a closed counter for each cat at 0
	cat.addEventListener('mousedown', (function(count) {
			return function(e) {
				count +=1;
				counters[index].innerText = count;
				e.preventDefault();
				e.target.setAttribute('src', `img/cat${index}-click.svg`);
			};
	})(0));
	
	cat.addEventListener('mouseup', function(e) {
		e.target.setAttribute('src', `img/cat${index}.svg`);
	});
	cat.addEventListener('mouseout', function(e) {
		e.target.setAttribute('src', `img/cat${index}.svg`);
	});
});
