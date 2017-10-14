const Git = (Json) =>{
	Json.addEventListener("click", on_click);
    input = Json.querySelector("#userInput");
	let url = 'https://api.github.com/users';
    //https://stackoverflow.com/questions/23835150/javascript-event-listener-for-multiple-buttons-with-same-class-name
	// add an event listener for ALL BUTTONS
	function on_click() {
      event = event || window.event;
      event.target = event.target || event.srcElement;

      let element = event.target;
      while (element) {
        if (element.nodeName === "BUTTON" && /searchButton/.test(element.className)) {
          getLogins(url);
		  break;
          }

      element = element.parentNode;
	  }
	}
  
	function getLogins(url){
        url = url + input.value; 
		var Httpreq = new XMLHttpRequest(); // a new request
		Httpreq.open("GET",url,true);
		Httpreq.reponseType = "json";
		// Wait for the response to finish. Then execute the following code
		Httpreq.onreadystatechange = function() {
			if (Httpreq.readyState==4 && Httpreq.status==200) {
				let json_obj = JSON.parse(Httpreq.responseText);
				let length = json_obj.length;
				console.log(json_obj);
				for(i=0; i< length; i++){
				  if(document.getElementById("UserInput").innerHTML == json_obj[i].name){
					console.log("YES");
				  }
				}
			}
		}
		Httpreq.send(null);
	}
}
Git(document.getElementById('Search'));