let usernames = [];
let geo_objects = [];
let userdetails = [];
let streetnames = [];
let userids = [];

let formatedUserNames = [];
let formattedGeoOjects = [];
let formatteduserdetails = [];
let formattedstreetnames = [];

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
let url = 'https://jsonplaceholder.typicode.com/users';

function Get(url){
	var Httpreq = new XMLHttpRequest(); // a new request
	Httpreq.open("GET",url,true);
	Httpreq.reponseType = "json";
    // Wait for the response to finish. Then execute the following code
	Httpreq.onreadystatechange = function() {
		if (Httpreq.readyState==4 && Httpreq.status==200) {
			let json_obj = JSON.parse(Httpreq.responseText);
			let length = json_obj.length;
            
            // Display a list of Names and a list of geo cordinates from the JSON
			for(i=0; i< length; i++){
				usernames[i] = json_obj[i].name;
				geo_objects[i] = JSON.stringify(json_obj[i].address.geo);
				formatedUserNames[i] = "<br><li>" + usernames[i];
				formattedGeoOjects[i] = "<br><li>" + geo_objects[i];
			}
			document.getElementById("usernames").innerHTML = "List of usernames: " + formatedUserNames;
			document.getElementById("geo").innerHTML = "List of Geo Objects: " + formattedGeoOjects;
            
            // Display a list of Street Addresses from the JSON
			for(i=0; i< length; i++){
				if(json_obj[i].address.zipcode.charAt(0) == 5){
					streetnames[i] = json_obj[i].address.street;
					formattedstreetnames[i] = "<br><li>" + streetnames[i];
				}
				userdetails[i] = [json_obj[i].name, json_obj[i].id, json_obj[i].company.name, json_obj[i].address.zipcode];
				formatteduserdetails[i] = "<br><li>" + userdetails[i];
			}
			document.getElementById("userdetails").innerHTML = "List of User Details: " + formatteduserdetails;
			document.getElementById("streetnames").innerHTML = "List of Street Names: " + formattedstreetnames;
            
            // Display the product of all ids from the JSON
			for(i=0; i< length; i++){
				if(i != length-1){
					userids[i] = json_obj[i].id + "*";
				}
				else{
					userids[i] = json_obj[i].id
				}
			}
			product = userids.toString().replace(/,/g,'');
			document.getElementById("product").innerHTML = "Product of Ids: " +eval(product)

		}
	}
	Httpreq.send(null);          
}
Get(url)