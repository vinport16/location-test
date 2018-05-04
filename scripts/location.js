
function write_to_body(lat, long){
  document.getElementById("location").innerHTML = "" + lat + ", " + long;
}

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    write_to_body(position.coords.latitude, position.coords.longitude);
  });
} else {
  document.getElementById("location").innerHTML = "No geolocation";
}