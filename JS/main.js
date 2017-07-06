
// Hide My Ass

/*
var middleBlock = document.getElementById('middle');
var unhideButton = document.getElementById('unhideButton');

unhideButton.onclick = function() {
	unhideButton.style.display='none';
	middleBlock.style.display = 'block';
};
*/

// Redirection

/*
var searchedTerm = ''

//alert(document.getElementById('terms').value)

document.getElementById('searchButton').onclick = function() {
	if (document.getElementById('terms').value!=='') {
		searchedTerm=document.getElementById('terms').value;
		window.open('https://www.google.fr/#q='+searchedTerm.replace(' ','+'));

	} else {
		alert('Please enter a valid search term for the love of God!')
	}
}
*/

//pr0n popup

//v1
/*
function pr0n () {
	alert ("Tu veux du porno ?");
}

setTimeout(pr0n, 5000);
*/

//v2
/*
function pr0n_v2() {
	window.open("SRC/popup.jpg", "Mate ça !", "height=500, width=200");
}

setTimeout(pr0n_v2, 5000);
*/

// Générateur de grille

/*
var n = prompt ('Plz enter 1-200:', '0');

console.log("n = "+n);
var color1 = '';
var color2 = '';
var color3 = '';

var height = (100/n).toString();
var height = height.toString() + "%";

alert (height);

var newDiv = '';
var newBR = '';


for (i=1; i<=n; i++) {
	for(j=1; j<n; j++){
		//console.log("j = "+j);
		newDiv = document.createElement('div');

		color1 = Math.round(Math.random()*16).toString(16);
		color2 = Math.round(Math.random()*16).toString(16);
		color3 = Math.round(Math.random()*16).toString(16);

		newDiv.style.borderColor="#"+color1+color2+color3;
		newDiv.style.borderWidth="2px";
		newDiv.style.borderStyle="solid";
		newDiv.style.width = height;
		newDiv.style.height = height;

		newDiv.style.display = "inline-block";

		document.body.appendChild(newDiv);
	}

	newDiv = document.createElement('div');

		color1 = Math.round(Math.random()*16).toString(16);
		color2 = Math.round(Math.random()*16).toString(16);
		color3 = Math.round(Math.random()*16).toString(16);

		newDiv.style.borderColor="#"+color1+color2+color3;
		newDiv.style.borderWidth="2px";
		newDiv.style.borderStyle="solid";
		newDiv.style.width = height;
		newDiv.style.height = height;
		*/
		
}