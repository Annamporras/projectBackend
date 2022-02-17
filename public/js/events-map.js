let map

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

    const inputs = document.querySelectorAll('.location')

    const latitude = Number(inputs[0])
    const longitude = Number(inputs[1])
    console.log(latitude, longitude)

    const marker = new google.maps.Marker({
        map,
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
