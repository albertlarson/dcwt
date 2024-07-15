const key = '7PHvaf5SN98az56tczHR';
const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const elevation = [
  '+',
  -10000,
  [
    '*',
    0.1 * 255,
    [
      '+',
      ['*', 256 * 256, ['band', 1]],
      ['+', ['*', 256, ['band', 2]], ['band', 3]],
    ],
  ],
];

const layer = new ol.layer.WebGLTile({
  opacity: 0.6,
  source: new ol.source.XYZ({
    url: `https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key=${key}`,
    maxZoom: 10,
    tileSize: 512,
    crossOrigin: 'anonymous',
  }),
  style: {
    variables: {
      level: 15,
    },
    color: [
      'case',
      ['<=', elevation, ['var', 'level']],
      [139, 212, 255, 1],
      [139, 212, 255, 0],
    ],
  },
});

new ol.Map({
  target: 'map-container',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${key}`,
        attributions: attributions,
        crossOrigin: 'anonymous',
        tileSize: 512,
      }),
    }),
    layer,
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-71.4316, 41.83]),
    zoom: 15,
  }),
});

const control = document.getElementById('level');
const output = document.getElementById('output');
const outputFeet = document.getElementById('outputFeet');

const updateLevel = () => {
  const levelValue = parseFloat(control.value);
  const feetValue = (levelValue * 3.28084).toFixed(2); // Convert meters to feet and round to 2 decimal places
  output.innerText = levelValue;
  outputFeet.innerText = feetValue;
  layer.updateStyleVariables({ level: levelValue });
};

output.innerText = control.value;
outputFeet.innerText = (parseFloat(control.value) * 3.28084).toFixed(2);
control.addEventListener('input', updateLevel);
control.addEventListener('change', updateLevel);
