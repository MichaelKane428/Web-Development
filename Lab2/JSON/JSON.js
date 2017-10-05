let usernames = [];
let geo_objects = [];

let formatedUserNames = [];
let formattedGeoOjects = [];

// https://stackoverflow.com/questions/2499567/how-to-make-a-json-call-to-a-url?noredirect=1&lq=1
function getjson(){
  let url = 'http://jsonplaceholder.typicode.com/users';
  
  function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
  }
  
  let json_obj = JSON.parse(Get(url));
  let length = json_obj.length;
  
  for(i=0; i< length; i++){
    usernames[i] = json_obj[i].name;
    geo_objects[i] = JSON.stringify(json_obj[i].address.geo);
    formatedUserNames[i] = "<br><li>" + usernames[i];
    formattedGeoOjects[i] = "<br><li>" + geo_objects[i];
    
    
  }
  document.getElementById("usernames").innerHTML = "List of usernames: " + formatedUserNames;
  document.getElementById("geo").innerHTML = "List of Geo Objects: " + formattedGeoOjects;
}

getjson();