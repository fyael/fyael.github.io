import 'leaflet-google-analytics';

var marker = L.marker([40.7128, -74.0060]).addTo(map);

marker.on('click', function() {
  gtag('event', 'map_interaction', {
    'event_category': 'Mapa',
    'event_action': 'Clic en marcador',
    'event_label': 'ID del marcador: ' + marker.id
  });
});

var map = L.map('map').setView([40.7128, -74.0060], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.addControl(new L.GoogleAnalytics({ trackingId: 'G-KPNHFVGEGN' }));
