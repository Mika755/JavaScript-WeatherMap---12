document.getElementById("search").addEventListener("click", function(){

    const placeName = document.getElementById("placeName").value
    const APIkey = "adb6f89003a9f4197426e0aacd0798d9"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${placeName},NO&appid=${APIkey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("place").innerText = data.name + ", NO";
        document.getElementById("temp").innerText = data.main.temp + "°";  
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("minMaks").innerText = data.main.temp_min + "° / " + data.main.temp_max + "°"; 
        });
    })  

document.getElementById("placeName").addEventListener("keydown", function(e) {
   if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("search").click();
   }
});