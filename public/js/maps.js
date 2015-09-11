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
          "geometry": { "type": "Point", "coordinates": [-122.50421047210692, 37.785944692784945]},
          "properties": {
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg",
              "url": "https://en.wikipedia.org/wiki/New_York_City",
              "marker-color": "#ff8888",
              "city": "lands end"
          }
      }, {
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [-122.51365184783937, 37.77990735801459]},
          "properties": {
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg",
              "url": "https://en.wikipedia.org/wiki/New_York_City",
              "marker-color": "#ff8888",
              "city": "Sutro Heights"
          }
      }, {
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [-122.51120567321777, 37.76800083156762]},
          "properties": {
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Chicago_sunrise_1.jpg/640px-Chicago_sunrise_1.jpg",
              "url": "https://en.wikipedia.org/wiki/Chicago",
              "marker-color": "#ff8888",
              "city": "Ocean Beach"
          }
      }, {
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [-122.49060630798338, 37.76596533600783]},
          "properties": {
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg",
              "url": "https://en.wikipedia.org/wiki/New_York_City",
              "marker-color": "#ff8888",
              "city": "Golden Gate Park"
          }
      }, {
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [-122.42734909057616, 37.759654943740344]},
          "properties": {
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg",
              "url": "https://en.wikipedia.org/wiki/New_York_City",
              "marker-color": "#ff8888",
              "city": "Dolores Park"
          }
      }, {
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [-122.4393653869629, 37.805918649667305]},
          "properties": {
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg",
              "url": "https://en.wikipedia.org/wiki/New_York_City",
              "marker-color": "#ff8888",
              "city": "Deushland"
          }
      }];
 

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

      
      myLayer.setGeoJSON(geoJson);

      

      });







