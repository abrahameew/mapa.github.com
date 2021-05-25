var wms_layers = [];

var lyr_Capadesalida_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Capa de salida",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Capadesalida_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11220376.234800, 3299990.196100, -11214232.234800, 3304086.196100]
                            })
                        });

lyr_Capadesalida_0.setVisible(true);
var layersList = [lyr_Capadesalida_0];
