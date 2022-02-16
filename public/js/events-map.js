function initMap() {

    drawMap()
    //getPlaces()
}


function drawMap() {
    const options = {
        center: { lat: 40.41266973724484, lng: - 3.7106261089045036 },
        zoom: 15
    }
    const mapInstance = new google.maps.Map(document.querySelector('#myMap'), options)
}
<<<<<<< HEAD
=======

const myMarker = new google.maps.Marker({
  position: {
  	lat: 41.3977381,
  	lng: 2.190471916
  },
  map: map,
  title: "I'm here"
});
>>>>>>> 3c91212bf0cdcdfa868dd366e3f6048c9c4e1ad2
