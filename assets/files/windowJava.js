// Get the modal
var newWindow = document.getElementById("storyWindow");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var windowOpen = 0;

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  newWindow.style.display = "block";
  newWindow.innerHTML = "<p>  \n \n \n \n \n \n HI I AM HERE </p>"
  console.log(newWindow.style.display);
  windowOpen=windowOpen+1;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  newWindow.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event)
{
	if (windowOpen>0)
	{
		windowOpen=windowOpen+1;
	}
	
	console.log(windowOpen);
	if (windowOpen>2)
	{
		console.log("Hi")
		windowOpen=0
		newWindow.style.display = "none";
	}
	
	if (event.target == newWindow)
	{
		newWindow.style.display = "none";
	}
}
