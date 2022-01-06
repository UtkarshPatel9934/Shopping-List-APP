'use strict';
/*
	WEB 230 Winter 2021
	Assignment 6b
	{your name, student number, and date here}

	Student Name: Utkarsh Patel
	Student Number: 0785541
	Date Created: 26 Nov 2021
*/

// Using Deligation
let selectUl = document.querySelector('ul');
// console.log(selectUl);

selectUl.addEventListener('click', eventHandler);

function eventHandler(evt){
	let saveTarget = evt.target;
	console.log(saveTarget);

	// Clicking the item
	if(saveTarget.tagName == 'LI')
	{
		saveTarget.className = "completed";
		// console.log("Class Added");
	}

	// Clicking the red "X"
	if(saveTarget.tagName == 'SPAN')
	{
		let saveParent = saveTarget.parentElement;
		selectUl.removeChild(saveParent);
	}
}

// Adding a new item
let selectA = document.querySelector('a');
selectA.addEventListener('click', eventHandlerOnA);

function eventHandlerOnA(){
	// console.log('You clicked on A element');
	if(selectInput.value) // to check the value is not empty in the Text Field!
	{
		addingLI();
	}
}


let selectInput = document.querySelector('input');
selectInput.addEventListener('keydown', eventHandlerOnInput);

function eventHandlerOnInput(e){
	// console.log('You clicked on Input element');
	if(e.key == 'Enter')
	{
		if(selectInput.value) // to check the value is not empty in the Text Field!
		{
			addingLI();
		}
	}
}

function addingLI(){
	// creating li element
	let createLI = document.createElement('li');

	// adding class to li
	createLI.className = "todo-item";

	// creating span element
	let createSpan = document.createElement('span');

	// adding class to span
	createSpan.className = "remove";

	// getting input from InputBox
	let saveInputFromInputBox = selectInput.value;

	// adding value of InputBox to li
	createLI.innerHTML = saveInputFromInputBox;

	// adding span to li
	createLI.appendChild(createSpan);

	// adding li to ul
	selectUl.appendChild(createLI);

	// when user added a li to ul, empty the textInput box
	selectInput.value = "";
}