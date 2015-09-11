/////////////////////////////////////////////////////////////////
// Daniel's idea
var geoJson = getMapData();

function getMapData(){
  $.get("api/coolSpots", function (response_data) {
      console.log(response_data);
      return response_data; 
    });
}; 

////////////////////////////////////////////////////////////////////

function savePlace() {
        console.log("badunkadunk");
      };

$(document).ready(function(){
 L.mapbox.accessToken = 'pk.eyJ1IjoibWFyY2VsZGVnYXMiLCJhIjoiN2E3OTFkMjE1MzFhMzc3OWExZGM3ZGUxMDk1MGFmYmIifQ.zbaNkH09nY2KLMAx550arg';

      var map = L.mapbox.map('map', 'mapbox.streets').setView([37.80240918587769, -122.4058485031128], 12);
      var myLayer = L.mapbox.featureLayer().addTo(map);
      

      // Add custom popups to each using our custom feature properties
      myLayer.on('layeradd', function(e) {
          var marker = e.layer,
              feature = marker.feature;
          var myButton = '<button onclick="savePlace()">Save to Favorites</button>';
          // Create custom popup content
          var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
                                  '<img src="' + feature.properties.image + '" />' +
                                  feature.properties.city +
                              '</a>' 
                              // create a link to save this location 
                              + myButton;

          // http://leafletjs.com/reference.html#popup
          marker.bindPopup(popupContent,{
              closeButton: false,
              minWidth: 320
          });
      });

      
      myLayer.setGeoJSON(getMapData());

      

      });







