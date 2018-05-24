const 	cats = Array.from(document.querySelectorAll('.cat')), 
counters = Array.from(document.querySelectorAll('.counter')); 
let n = 0; //this little variable will temporarily stopre the inside of the cat clicker counter, inclrease by 1 on click and then become the inner text of the counter

cats.forEach(function(cat, index){
	cat.addEventListener('mousedown', function(e) {
		n = Number(counters[index].innerText) + 1;
		counters[index].innerText = n;
		e.target.setAttribute('src', `img/cat${index}-click.svg`);
	});
	cat.addEventListener('mouseup', function(e) {
		e.target.setAttribute('src', `img/cat${index}.svg`);
	});
});



