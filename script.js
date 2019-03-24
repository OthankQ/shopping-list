var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll(".delete");


function inputLength() {
	return input.value.length;
}

//Add li and button items to the list, and at the same time add event listeners
function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("X"));
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(deleteButton);
	li.addEventListener("click",addStrike, false);
	deleteButton.addEventListener("click", deleteItem, false);
	input.value = "";
}

//Check if there is any input then add the list by calling createListElement
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//Same as above but with enter key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Function to add done class to clicked list item
function addStrike(e){
	//get clicked element
	e = e || window.e;
	var target = e.target || e.srcElement,
		text = target.textContent || target.innerText;
	//toggle classname done
	target.classList.toggle("done");
}

//Delete clicked items
function deleteItem(e){
	e = e || window.e;
	var target = e.target || e.srcElement;
		// text = target.textContent || target.innerText;
	target.parentNode.remove(target);
}

//Add event listeners to all the existing li and button items
for (var i=0; i<listItems.length; i++){
	listItems[i].addEventListener("click", addStrike, false);
}

for (var i=0; i<deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", deleteItem, false);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);