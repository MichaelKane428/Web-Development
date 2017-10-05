let usernames = [];
let geo_objects = [];
let userdetails = [];
let streetnames = [];
let userids = [];

let formatedUserNames = [];
let formattedGeoOjects = [];
let formatteduserdetails = [];
let formattedstreetnames = [];

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

getjson();