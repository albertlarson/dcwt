document.addEventListener('DOMContentLoaded', () => {
    var mousePositionControl = new ol.control.MousePosition({
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
    });

    var map = new ol.Map({
        controls: ol.control.defaults.defaults().extend([mousePositionControl]),
        target: 'map',
        layers: [
            new ol.layer.Group({
                title: 'Base maps',
                layers: [
                    new ol.layer.Tile({
                        title: 'OpenStreetMap',
                        type: 'base',
                        visible: true,
                        source: new ol.source.OSM()
                    }),
                ]
            }),
            new ol.layer.Group({
                title: 'Overlay',
                layers: [
                    new ol.layer.Tile({
                        title: 'Rivers Removed',
                        className: 'color-overlay1',
                        extent: [-9089781.356679, 3717460.409148, -8973542.316932, 3807388.058698],
                        source: new ol.source.XYZ({
                            attributions: '',
                            minZoom: 8,
                            maxZoom: 15,
                            url: './tile_test3/{z}/{x}/{y}.png',
                            tileSize: [256, 256]
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Grayscale',
                        className: 'color-overlay1',
                        extent: [-9089781.356679, 3717460.409148, -8973542.316932, 3807388.058698],
                        source: new ol.source.XYZ({
                            attributions: '',
                            minZoom: 8,
                            maxZoom: 15,
                            url: './tile_test4/{z}/{x}/{y}.png',
                            tileSize: [256, 256]
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'False Color Composite',
                        className: 'color-overlay4',
                        extent: [-9089781.356679, 3717460.409148, -8973542.316932, 3807388.058698],
                        source: new ol.source.XYZ({
                            attributions: '',
                            minZoom: 8,
                            maxZoom: 15,
                            url: './tile_test5/{z}/{x}/{y}.png',
                            tileSize: [256, 256]
                        })
                    }),
                ]
            }),
        ],
        view: new ol.View({
            center: [-9031661.836806, 3752424.233923],
            zoom: 10,
        })
    });

    map.addControl(new ol.control.LayerSwitcher());
});
