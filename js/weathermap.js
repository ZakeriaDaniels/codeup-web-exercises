"use strict";
// inserted map
let myToken = 'pk.eyJ1IjoiemFrZXJpYWQiLCJhIjoiY2xmNnp5cHp5MHJpYTNxbzl1MThpMzkwciJ9.lsyAetS82CwK7bVuXugsVA'
mapboxgl.accessToken = myToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-95.3594082357231, 29.701453834980896], // starting position [lng, lat]
    zoom: 15, // starting zoom
});
let marker = new mapboxgl.Marker({
    draggable:true
})
.setLngLat([0,0])
.addTo(map);

//tracking location
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions:{
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
}));

// allows draggable marker to update weather
function onDragEnd(){
    let lngLat=marker.getLngLat();
    let areaWeather = [lngLat.lng, lngLat.lat];
    geoCodeBuildWeather(areaWeather)
}
marker.on(`dragend`, onDragEnd)
// function to push weather from api to html
function geoCodeBuildWeather(searchString) {
    let html = "";
    geocode(searchString, MAPBOX_KEY).then(function (results) {
        console.log(results[0]);
        console.log(results[1]);
        // my home cord:-95.3594082357231, 29.701453834980896
        console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`);

        $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {console.log(data)
            map.flyTo({
                center: results,
                zoom: 9
            })
            marker.setLngLat(results)

            html += `<h4>Current location: ${data.name}</h4>`;
            // html += '<h4>Date: ${data.list[0].dt_txt}</h4>'
            html += `<h4>Current weather: ${data.weather[0].description}</h4>`;
            html += `<h5>Current average wind speed: ${parseInt(data.wind.speed)} knots</h5>`;
            html += `<h5>Current Temperature: ${parseInt(data.main.temp)} &deg;</h5>`;
            html += `<h5>Current humidity: ${parseInt(data.main.humidity)}</h5>`;
    $("#day1").html(html);

            $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {console.log(data)
                var addHtml2=""
                addHtml2 += `<h4>Current location: ${data.city.name}</h4>`;
                addHtml2 += `<h4> date: ${data.list[3].dt_txt}</h4>`
                addHtml2 += `<h4>Future weather: ${data.list[3].weather[0].description}</h4>`;
                addHtml2 += `<h5>average wind speed: ${parseInt(data.list[3].wind.speed)} knots</h5>`;
                addHtml2 += `<h5>Temperature: ${parseInt(data.list[3].main.temp)} &deg;</h5>`;
                addHtml2 += `<h5>Current humidity: ${parseInt(data.list[3].main.humidity)}</h5>`;
    $("#day2").html(addHtml2);

            })
            $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {console.log(data)
                let addHtml3=""
                addHtml3 += `<h4>Current location: ${data.city.name}</h4>`;
                addHtml3 += `<h4> date: ${data.list[12].dt_txt}</h4>`
                addHtml3 += `<h4>Future weather: ${data.list[12].weather[0].description}</h4>`;
                addHtml3 += `<h5>average wind speed: ${parseInt(data.list[12].wind.speed)} knots</h5>`;
                addHtml3 += `<h5>Temperature: ${parseInt(data.list[12].main.temp)} &deg;</h5>`;
                addHtml3 += `<h5>Current humidity: ${parseInt(data.list[12].main.humidity)}</h5>`;
                $("#day3").html(addHtml3);
            })
            $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {console.log(data)
                let addHtml4=""
                addHtml4 += `<h4>Current location: ${data.city.name}</h4>`;
                addHtml4 += `<h4> date: ${data.list[18].dt_txt}</h4>`
                addHtml4 += `<h4>Future weather: ${data.list[18].weather[0].description}</h4>`;
                addHtml4 += `<h5>average wind speed: ${parseInt(data.list[18].wind.speed)} knots</h5>`;
                addHtml4 += `<h5>Temperature: ${parseInt(data.list[18].main.temp)} &deg;</h5>`;
                addHtml4 += `<h5>Current humidity: ${parseInt(data.list[18].main.humidity)}</h5>`;
                $("#day4").html(addHtml4);
            })
            $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {console.log(data)
                let addHtml5=""
                addHtml5 += `<h4>Current location: ${data.city.name}</h4>`;
                addHtml5 += `<h4> date: ${data.list[27].dt_txt}</h4>`
                addHtml5 += `<h4>Future weather: ${data.list[27].weather[0].description}</h4>`;
                addHtml5 += `<h5>average wind speed: ${parseInt(data.list[27].wind.speed)} knots</h5>`;
                addHtml5 += `<h5>Temperature: ${parseInt(data.list[27].main.temp)} &deg;</h5>`;
                addHtml5 += `<h5>Current humidity: ${parseInt(data.list[27].main.humidity)}</h5>`;
                $("#day5").html(addHtml5);
            })
        })
    })
};
// submit button
$("#myBtn").click(function(e){
    e.preventDefault();
    geoCodeBuildWeather($("#searchInput").val());
})


