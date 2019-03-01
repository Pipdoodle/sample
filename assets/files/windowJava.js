// Get the modal
var newWindow = document.getElementById("storyWindow");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var windowOpen = 0;

function load() {
	$.get('text/WhiteLinen.txt', function(data){
		newWindow.innerHTML = data;
		console.log(data);
	});
	/*console.log("Open")
    var file = new XMLHttpRequest();
    file.open("GET", "text/WhiteLinen.txt", true);
    file.onreadystatechange = function() {
      if (file.readyState === 4) { 
      console.log("good")
 // Makes sure the document is ready to parse
        if (file.status === 200) { 
        console.log ("good2") // Makes sure it's found the file
          text = file.responseText;
          newWindow.innerHTML = text;
          console.log(text)
        }
      }
    }*/

}



// When the user clicks on the button, open the modal 

btn.onclick = function() {
  newWindow.style.display = "block";
  load();
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
	if (windowOpen>2)
	{
		windowOpen=0
		newWindow.style.display = "none";
	}
	if (event.target == newWindow)
	{
		newWindow.style.display = "none";
	}
}



