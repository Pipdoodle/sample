$(document).ready(function(){

(".artpost").click(popUp( $(".artpost").attr('id')){});

});

function popUp(ident) {

	var popup = document.getElementById("pop")
	switch(ident)
	{
		case "Dragon":
			popup.addRule('width:100%')
			popup.addRule('height:100%')
			popup.innerHTML+= '<p> hi </p>'
			break;
		case "Blue Bird":
			break;
		default:
			break;
	}

}