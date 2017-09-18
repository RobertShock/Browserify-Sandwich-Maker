"use strict";

const printToDom = require('./dom');
const loadBread = require('./bread');
const loadCheese = require('./cheese');
const loadCondiments = require('./condiments');
const loadMeat = require('./meat');
const loatVeggie = require('./veggie');

const errorFunction = () => {
	console.log("You broke everything. Thanks.");
};

const whenBreadLoad = function() {
	breadArray = JSON.parse(this.responseText).bread;
	loadCheese(whenCheeseLoad, errorFunction);
};

const whenCheeseLoad = function() {
	cheeseArray = JSON.parse(this.responseText).cheese;
	load
}



const whenCategoriesLoad = function(){
	let categoryArray = JSON.parse(this.responseText).categories;
	combineArrays(categoryArray);
};

const combineArrays = (categories) => {
	categories.forEach((category) => {
		gifArray.forEach((gif) => {
			if (gif.category == category.id) {
				gif.categoryName = category.name;
				gif.categoryDataName = category.dataName;
			}
		});
	});
	// TODO: call the pring to dom
	printToDom(gifArray);
};

// TODO: set up 'initializer' - load gifs
const initializer = () => {
	loadGifs(whenGifsLoad, errorFunction);
};

const getGifs = () => {
	return gifArray;
};

module.exports = {initializer, getGifs};


