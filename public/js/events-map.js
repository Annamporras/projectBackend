function initMap() {

    drawMap()
    printMarker()
    //getPlaces()
}


function drawMap() {
    const options = {
        center: { lat: 40.41266973724484, lng: - 3.7106261089045036 },
        zoom: 15
    }
    const mapInstance = new google.maps.Map(document.querySelector('#myMap'), options)
}
function printMarker() {
    const { Marker } = google.maps
    const inputs = document.querySelectorAll  //('.d-none input')  // pinta cordenadas trasnspartes

    const latitude = Number(inputs[0].value)
    const longitude = Number(inputs[1].value)

    new Marker({
        map, // pintar la chincheta dentro del mapa centrado con las mismas coordenadas
        position: { lat: latitude, lng: longitude }
    })
}
// const myMarker = new google.maps.Marker({
//   position: {
//   	lat: 41.3977381,
//   	lng: 2.190471916
//   },
//   map: map,
//   title: "I'm here"
// });
