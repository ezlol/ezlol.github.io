var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/cutie patootie.jpg') {
		myImage.setAttribute('src', 'images/alli2.jpg');
	} else {
		myImage.setAttribute('src', 'images/cutie patootie.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'My girlfriend is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'My girlfriend is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

