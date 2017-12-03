function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var IT = new google.maps.LatLng(42.745334, 12.738430);
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 40.722670, lng: -73.518183}
        });
    
       
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        var markerHome = new google.maps.Marker({
          position: {lat: 40.722670, lng: -73.518183},
          map: map
        });
      }


function addmarker(latilongi) {
    var marker = new google.maps.Marker({
        position: latilongi,
        title: 'new marker',
        draggable: true,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: '<div id="infodiv2">infowindow!</div>'
    });
    //map.setZoom(15);

    //infowindow.open(map, marker)
}


//     document.addEventListener("click", function(){
//   addmarker({lat: -40.722670, lng: -73.518183});
// });


