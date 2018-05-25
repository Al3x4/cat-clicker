document.addEventListener("DOMContentLoaded", function() {

let model = {

	currentCat : null,

	create : function(name, img, animation, thumb) {
		class Cat {
			constructor(name, img, animation, thumb) {
				this.name = name, 
				this.img = img,
				this.animation = animation;
				this.thumb = thumb,
				this.counter = 0
			}
		}
		return (new Cat(name, img, animation, thumb));
	},

	init : function () {
		//creates all the intial cats
		let that = this;
		this.cats = [that.create('Oscar', 'img/cat0.svg', 'img/cat0-click.svg', 'img/cat0-thumb.svg'),
						that.create('Ivan', 'img/cat1.svg', 'img/cat1-click.svg', 'img/cat1-thumb.svg'),
						that.create('Bella', 'img/cat2.svg', 'img/cat2-click.svg', 'img/cat2-thumb.svg'),
						that.create('Tigger', 'img/cat3.svg', 'img/cat3-click.svg', 'img/cat3-thumb.svg'),
						that.create('Puss', 'img/cat4.svg', 'img/cat4-click.svg', 'img/cat4-thumb.svg') ];	
		
		this.currentCat = this.cats[0];
	},

}


let octopus = {

	init : function(){

		//set the initial cat array and se the current cat
		model.init();

		//display the list of cats dinamically
		listView.init();

		//display the cuurent cat
		catView.init();
	},

	allCats : function () {
		return model.cats;
	},

	setCurrentCat : function (thisCat) {
		model.currentCat = thisCat;
	},

	getCurrentCat : function () {
		return model.currentCat;
	},

	displayCurrentCat : function () {
		return catView.render();
	},

	incrementCounter : function() {
		model.currentCat.counter +=1;
		catView.updateCounter();
	},

	flash : function(e) {
				e.preventDefault();
				e.target.setAttribute('src', this.getCurrentCat().animation);
				this.incrementCounter();
			}, 

	revert : function(e) {
				e.preventDefault();
				e.target.setAttribute('src', this.getCurrentCat().img);	
			} 

}


let listView = {

	init : function() {

		this.catList = document.querySelector('.cat-list');
		
		this.render()
	},


	render : function () {

		this.catList.innerHTML = "";
		let newListItem;

		let cats = octopus.allCats();

		cats.forEach(function(cat) {

			//create a new list element
			newListItem = document.createElement('li');
			
			//add the content to the list element
			newListItem.innerHTML = `<img class="cat-thumb" src="${cat.thumb}" alt="${cat.name}">
									<p>${cat.name}</p>`
			
			//put it on the DOM
			this.catList.appendChild(newListItem);

			//add the event listener
			newListItem.addEventListener('click', (function (closedCat) {
				return (function() {
							octopus.setCurrentCat(closedCat);
							octopus.displayCurrentCat();
							console.log(`who is it${closedCat.name}`);

						});
			})(cat)); // use IIFE to take the cat we're at in the array from this scope and copy it into the function as closedCat

		}.bind(this)); //i used bind to set the scope inside forEach to be the listView Object

	}

}


let catView = {

	init : function() {
		this.catPresentation = document.querySelector('.cat-container'); 
		this.catToRender = octopus.getCurrentCat();
		this.render();

		this.catPresentation.addEventListener('mousedown', octopus.flash.bind(octopus));
		this.catPresentation.addEventListener('mouseup', octopus.revert.bind(octopus));
		this.catPresentation.addEventListener('mouseout', octopus.revert.bind(octopus));

	},


	render : function(){
		let catToRender = octopus.getCurrentCat();
	
		this.catPresentation.innerHTML = 	`<span class="cat-name">${catToRender.name}</span>
											<img class="cat" src="${catToRender.img}" alt="${this.catToRender.name}">
											<span class="counter">${catToRender.counter}</span>`;	
	},

	updateCounter : function () {
		this.catPresentation.querySelector('.counter').innerText = octopus.getCurrentCat().counter; 
	}

}


octopus.init();

});