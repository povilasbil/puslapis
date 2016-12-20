
var lat = 54.897366;
var lon = 23.914143;
var map = new google.maps.Map();

function showLocation(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
          //  alert(lat + '   ' + lon);
            map.setCenter(new google.maps.LatLng(lat, lon));
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(lat, lon),
              icon: {url: 'https://www.google.es/earth/outreach/images/icon-streetview-pegman.png',
                scaledSize: new google.maps.Size(40, 35)
              },
            });
            marker.setMap(map);
         }

         function errorHandler(err) {
            if(err.code == 1) {
               alert("Draudžiama!");
            }

            else if( err.code == 2) {
               alert("Lokacija negalima");
            }
         }

         function getLocation(){
            if(navigator.geolocation){
               var options = {timeout:10000};
               navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
            }

            else{
               alert("Naršyklė nepalaiko lokacijos radimo");
            }
         }












function myMap() {




var places = [
  ['Casa della pasta', 54.896931, 23.919332, 'Laisvės al. 27', 'https://www.facebook.com/italurestoranas/', 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 22.00, 23.00, 23.00, 23.00, 23.00, 23.00, 23.00],
  ['Radharanė', 54.897303, 23.917972, 'Laisvės al. 40', 'https://www.facebook.com/Radharane/', 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00],
  ['Movido', 54.897646, 23.91561, 'Laisvės al. 54', 'https://www.facebook.com/Movido-1588246278113806/', 14.00, 11.30, 11.30, 11.30, 11.30, 11.30, 14.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00],
  ['Hesburger', 54.897411, 23.916432, 'Laisvės al. 48', 'https://www.hesburger.lt/restoranai?tid=404', 12.00, 09.00, 09.00, 09.00, 09.00, 09.00, 20.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 20.00],
  ['Milano picerija', 54.896786, 23.917205, 'Mickevičiaus g. 19', 'https://www.facebook.com/milano.picerija/', 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00],
  ['Bella Italia', 54.896627, 23.913728, 'Daukanto g. 14', 'http://www.pasromanopaolo.lt/',  09.00, 09.00, 09.00, 09.00, 09.00, 09.00, 09.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00],
  ['Bella Sicilia', 54.896831, 23.913278, 'Daukanto g. 17', 'https://www.facebook.com/Bellasiciliapasromanopaolo/', 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00],
  ['Republic No.1', 54.897266, 23.91312, 'Laisvės al. 57', 'https://www.facebook.com/republicbaras/', 12.00, 12.00, 12.00, 12.00, 12.00, 12.00, 12.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00],
  ['Arnas and wife', 54.896933, 23.913768, 'Daukanto g. 18', 'https://www.facebook.com/arnasandwife/', 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 15.00, 18.00, 19.00, 19.00, 22.00, 23.00, 23.00],
  ['Višta puode', 54.898314, 23.913415, 'Daukanto g. 23', 'https://www.facebook.com/vistapuode/', 12.00, 08.00, 08.00, 08.00, 17.00, 17.00, 17.00, 18.00, 08.00, 08.00, 08.00, 23.00, 23.00, 23.00],
  ['Charlie pizza', 54.897544, 23.913278, 'Laisvės al. 68', 'https://kur.lt/restoranai/charlie-pizza-laisves-al-68', 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00, 24.00],
  ['PJazz', 54.897568, 23.912876, 'Laisvės al. 68', 'https://www.facebook.com/PJazzLietuva/', 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 23.00, 23.00, 23.00, 23.00, 24.00, 24.00, 23.00],
  ['Architektai', 54.900554, 23.914103, 'Donelaičio g. 62', 'https://www.facebook.com/restoranasarchitektai/', 08.00, 08.00, 08.00, 08.00, 08.00, 08.00, 08.00, 08.00, 19.00, 19.00, 19.00, 19.00, 19.00, 08.00],
  ['Žaliūkė', 54.888472, 23.923028, 'Kaunakiemio g. 30', 'https://www.facebook.com/zaliuke/', 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 22.00, 22.00, 22.00, 22.00, 22.00, 22.00, 22.00],
  ['Mamma pizza', 54.889755, 23.925921, 'Vytauto pr. 39', 'https://www.facebook.com/mammapizza.lt/', 11.00, 10.00, 10.00, 10.00, 10.00, 10.00, 11.00, 23.00, 23.00, 23.00, 23.00, 23.00, 24.00, 24.00],
  ['Pepper pizza', 54.88885, 23.927448, 'Vytauto pr. 21', 'http://www.pepperpizza.lt/', 11.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 22.00, 23.00, 23.00, 23.00, 23.00, 24.00, 24.00],

  ];



var infoWindow = new google.maps.InfoWindow();
var myCenter = new google.maps.LatLng(lat, lon);
var mapCanvas = document.getElementById("map");
var mapOptions = {center: myCenter, zoom: 17, mapTypeId: google.maps.MapTypeId.HYBRID};
map = new google.maps.Map(mapCanvas, mapOptions);
var hoursMinutes;

var image = {
  url: 'https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w300',
  scaledSize: new google.maps.Size(47, 50)
};

var currentTime = new Date();
var weekDay = currentTime.getDay();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
hoursMinutes = hours + "." + minutes;

for(var i = 0; i < places.length; i++ ) {

	var newIcon = "";
    if ((hoursMinutes > places[i][weekDay+5]) && (hoursMinutes < places[i][weekDay+12]) )
    { newIcon = image; }


    markerContent = ('<b>'+ places[i][0] + '</b></br>Adresas:' + ' ' + places[i][3] +
     '</br>' + '<a href=' + places[i][4] + '>Eiti į puslapį</a>');

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(places[i][1], places[i][2]),
    pavadinimas: places[i][0],
    content: markerContent,
    icon: newIcon,
  });


  google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(marker.content);
                infoWindow.open(map, marker);
            };
        })(marker, i));


    marker.setMap(map);

}
}
