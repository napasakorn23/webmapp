var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1_1 = new ol.format.GeoJSON();
var features_1_1 = format_1_1.readFeatures(json_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_1.addFeatures(features_1_1);
var lyr_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_1, 
                style: style_1_1,
                popuplayertitle: "ทริปเที่ยว 1 วัน",
                interactive: true,
                title: '<img src="styles/legend/1_1.png" /> ทริปเที่ยว 1 วัน'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "ทริปธรรมชาติ",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ทริปธรรมชาติ'
            });
var format_9_3 = new ol.format.GeoJSON();
var features_9_3 = format_9_3.readFeatures(json_9_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9_3.addFeatures(features_9_3);
var lyr_9_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9_3, 
                style: style_9_3,
                popuplayertitle: "ทริปไหว้พระ 9 วัด",
                interactive: true,
                title: '<img src="styles/legend/9_3.png" /> ทริปไหว้พระ 9 วัด'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "คาเฟ่ โซนเขาเต่า",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> คาเฟ่ โซนเขาเต่า'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "ทริปสายทะเลหัวหิน",
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> ทริปสายทะเลหัวหิน'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_1_1.setVisible(true);lyr__2.setVisible(true);lyr_9_3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1_1,lyr__2,lyr_9_3,lyr__4,lyr__5];
lyr_1_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr__2.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_9_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr__4.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr__5.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_1_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_9_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_1_1.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__2.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_9_3.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__4.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__5.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});