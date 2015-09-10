 
$(document).ready(function(){
 L.mapbox.accessToken = 'pk.eyJ1IjoibWFyY2VsZGVnYXMiLCJhIjoiN2E3OTFkMjE1MzFhMzc3OWExZGM3ZGUxMDk1MGFmYmIifQ.zbaNkH09nY2KLMAx550arg';

          var map = L.mapbox.map('map', 'mapbox.streets').setView([37.80240918587769, -122.4058485031128], 9);
          var myLayer = L.mapbox.featureLayer().addTo(map);
          
          var geoJson = [{
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-122.4058485031128, 37.80240918587769]},
    "properties": {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cherry_Blossoms_and_Washington_Monument.jpg/320px-Cherry_Blossoms_and_Washington_Monument.jpg",
        "url": "https://en.wikipedia.org/wiki/Washington,_D.C.",
        "marker-color": "#ff8888",
        "city": "Coit Tower"
    }
}, {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-122.40096688270567, 37.79096412372944]},
    "properties": {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Chicago_sunrise_1.jpg/640px-Chicago_sunrise_1.jpg",
        "url": "https://en.wikipedia.org/wiki/Chicago",
        "marker-color": "#ff8888",
        "city": "General Assembly"
    }
}, {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-122.47841835021973, 37.81859880017508]},
    "properties": {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg",
        "url": "https://en.wikipedia.org/wiki/New_York_City",
        "marker-color": "#ff8888",
        "city": "Golden Gate Bridge"
    }
}, {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-122.47841835021973, 37.91859880017508]},
    "properties": {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg",
        "url": "https://en.wikipedia.org/wiki/New_York_City",
        "marker-color": "#ff8888",
        "city": "test point"
    }
}];

      // Add custom popups to each using our custom feature properties
      myLayer.on('layeradd', function(e) {
          var marker = e.layer,
              feature = marker.feature;

          // Create custom popup content
          var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
                                  '<img src="' + feature.properties.image + '" />' +
                                  feature.properties.city +
                              '</a>';

          // http://leafletjs.com/reference.html#popup
          marker.bindPopup(popupContent,{
              closeButton: false,
              minWidth: 320
          });
      });

      
      myLayer.setGeoJSON(geoJson);
      });




