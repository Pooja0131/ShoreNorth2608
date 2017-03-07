// initialize map
function initMap() {
    var myLatLng = {
        lat: 40.730,
        lng: -74.032
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng,
        zoomControl: false,
        disableDefaultUI: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        rotateControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}


// fullpage scroll function
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        // scrollBar: true,
    });
});
