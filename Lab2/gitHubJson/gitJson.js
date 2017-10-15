const Git = (Search, UserRepos) =>{
	Search.addEventListener("click", on_click);
    UserRepos.addEventListener("click", on_click);
	let url = 'https://api.github.com/users';
    let login ="";
    generateTextArea(url);
    //https://stackoverflow.com/questions/23835150/javascript-event-listener-for-multiple-buttons-with-same-class-name
	// add an event listener for ALL BUTTONS
	function on_click() {
      event = event || window.event;
      event.target = event.target || event.srcElement;

      let element = event.target;
      while (element) {
        if (element.nodeName === "BUTTON" && /searchButton/.test(element.className)) {
          login = document.getElementById("userInput").value;
          getLogins(url+ '/' + login);
		  break;
          }
        else if(element.nodeName === "TEXTAREA" && /displayUserRepoInfo/.test(element.className)){
          login = element.innerHTML;
          getLogins(url+ '/' + login);
		  break;
        }

      element = element.parentNode;
	  }
	}
    
    function generateTextArea(url){
		var Httpreq = new XMLHttpRequest(); // a new request
		Httpreq.open("GET",url,true);
		Httpreq.reponseType = "json";
		// Wait for the response to finish. Then execute the following code
		Httpreq.onreadystatechange = function() {
			if (Httpreq.readyState==4 && Httpreq.status==200) {
				let json_obj = JSON.parse(Httpreq.responseText);
				let length = json_obj.length;
              for(i=0; i<length;i++){
                if(length > 5){
                  document.getElementById('UserRepos').style.overflow ="scroll";
                  document.getElementById('UserRepos').innerHTML += '<textarea class="displayUserRepoInfo" type="text" readonly="readonly">' +  json_obj[i].login +'</textarea>';
                }
                else{
                  document.getElementById('UserRepos').innerHTML += '<textarea class="displayUserRepoInfo" type="text" readonly="readonly">' + json_obj[i].login +'</textarea>'
                }
             
                
              }
			}
		}
		Httpreq.send(null);
	}
  
	function getLogins(url){
		var Httpreq = new XMLHttpRequest(); // a new request
		Httpreq.open("GET",url,true);
		Httpreq.reponseType = "json";
		// Wait for the response to finish. Then execute the following code
		Httpreq.onreadystatechange = function() {
			if (Httpreq.readyState==4 && Httpreq.status==200) {
				let json_obj = JSON.parse(Httpreq.responseText);
				let length = json_obj.length;
                document.getElementById("img").src = json_obj.avatar_url;
                document.getElementById("Name").value = json_obj.name;
                document.getElementById("UserName").value = json_obj.login;
                document.getElementById("Email").value = json_obj.email;
                document.getElementById("Location").value = json_obj.location;
                document.getElementById("Gist").value = json_obj.public_gists;
			}
		}
		Httpreq.send(null);
	}
}
Git(document.getElementById('Search'), document.getElementById('UserRepos'));