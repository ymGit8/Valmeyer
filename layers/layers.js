var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_valmeyerCitynewValmeyerParcels_1 = new ol.format.GeoJSON();
var features_valmeyerCitynewValmeyerParcels_1 = format_valmeyerCitynewValmeyerParcels_1.readFeatures(json_valmeyerCitynewValmeyerParcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_valmeyerCitynewValmeyerParcels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_valmeyerCitynewValmeyerParcels_1.addFeatures(features_valmeyerCitynewValmeyerParcels_1);
var lyr_valmeyerCitynewValmeyerParcels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_valmeyerCitynewValmeyerParcels_1, 
                style: style_valmeyerCitynewValmeyerParcels_1,
                popuplayertitle: 'valmeyerCity — newValmeyerParcels',
                interactive: true,
    title: 'valmeyerCity — newValmeyerParcels<br />\
    <img src="styles/legend/valmeyerCitynewValmeyerParcels_1_0.png" /> 673 - 718<br />\
    <img src="styles/legend/valmeyerCitynewValmeyerParcels_1_1.png" /> 718 - 738<br />\
    <img src="styles/legend/valmeyerCitynewValmeyerParcels_1_2.png" /> 738 - 754<br />\
    <img src="styles/legend/valmeyerCitynewValmeyerParcels_1_3.png" /> 754 - 771<br />\
    <img src="styles/legend/valmeyerCitynewValmeyerParcels_1_4.png" /> 771 - 800<br />' });
var format_valmeyerCityold_valmeyer_parcels_2 = new ol.format.GeoJSON();
var features_valmeyerCityold_valmeyer_parcels_2 = format_valmeyerCityold_valmeyer_parcels_2.readFeatures(json_valmeyerCityold_valmeyer_parcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_valmeyerCityold_valmeyer_parcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_valmeyerCityold_valmeyer_parcels_2.addFeatures(features_valmeyerCityold_valmeyer_parcels_2);
var lyr_valmeyerCityold_valmeyer_parcels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_valmeyerCityold_valmeyer_parcels_2, 
                style: style_valmeyerCityold_valmeyer_parcels_2,
                popuplayertitle: 'valmeyerCity — old_valmeyer_parcels',
                interactive: true,
                title: '<img src="styles/legend/valmeyerCityold_valmeyer_parcels_2.png" /> valmeyerCity — old_valmeyer_parcels'
            });
var format_valmeyerCityValmeyerRoads_3 = new ol.format.GeoJSON();
var features_valmeyerCityValmeyerRoads_3 = format_valmeyerCityValmeyerRoads_3.readFeatures(json_valmeyerCityValmeyerRoads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_valmeyerCityValmeyerRoads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_valmeyerCityValmeyerRoads_3.addFeatures(features_valmeyerCityValmeyerRoads_3);
var lyr_valmeyerCityValmeyerRoads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_valmeyerCityValmeyerRoads_3, 
                style: style_valmeyerCityValmeyerRoads_3,
                popuplayertitle: 'valmeyerCity — ValmeyerRoads',
                interactive: true,
                title: '<img src="styles/legend/valmeyerCityValmeyerRoads_3.png" /> valmeyerCity — ValmeyerRoads'
            });
var format_valmeyerCitycityLabels_4 = new ol.format.GeoJSON();
var features_valmeyerCitycityLabels_4 = format_valmeyerCitycityLabels_4.readFeatures(json_valmeyerCitycityLabels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_valmeyerCitycityLabels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_valmeyerCitycityLabels_4.addFeatures(features_valmeyerCitycityLabels_4);
var lyr_valmeyerCitycityLabels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_valmeyerCitycityLabels_4, 
                style: style_valmeyerCitycityLabels_4,
                popuplayertitle: 'valmeyerCity — cityLabels',
                interactive: true,
                title: '<img src="styles/legend/valmeyerCitycityLabels_4.png" /> valmeyerCity — cityLabels'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_valmeyerCitynewValmeyerParcels_1.setVisible(true);lyr_valmeyerCityold_valmeyer_parcels_2.setVisible(true);lyr_valmeyerCityValmeyerRoads_3.setVisible(true);lyr_valmeyerCitycityLabels_4.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_valmeyerCitynewValmeyerParcels_1,lyr_valmeyerCityold_valmeyer_parcels_2,lyr_valmeyerCityValmeyerRoads_3,lyr_valmeyerCitycityLabels_4];
lyr_valmeyerCitynewValmeyerParcels_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL_NUM': 'PARCEL_NUM', 'NOTES': 'NOTES', 'SiteAddres': 'SiteAddres', 'Acreage': 'Acreage', 'Land': 'Land', 'Farmland': 'Farmland', 'Building': 'Building', 'FarmBldg': 'FarmBldg', 'UseCode': 'UseCode', 'Shape_Leng': 'Shape_Leng', 'VacImp': 'VacImp', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'elevMean': 'elevMean', 'elevMin': 'elevMin', 'elevMax': 'elevMax', 'slopeMean': 'slopeMean', 'slopeMin': 'slopeMin', 'slopeMax': 'slopeMax', });
lyr_valmeyerCityold_valmeyer_parcels_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL_NUM': 'PARCEL_NUM', 'NOTES': 'NOTES', 'SiteAddres': 'SiteAddres', 'Acreage': 'Acreage', 'Land': 'Land', 'Farmland': 'Farmland', 'Building': 'Building', 'FarmBldg': 'FarmBldg', 'UseCode': 'UseCode', 'Shape_Leng': 'Shape_Leng', 'VacImp': 'VacImp', 'min_elev': 'min_elev', 'max_elev': 'max_elev', 'mean_elev': 'mean_elev', 'min_slope': 'min_slope', 'max_slope': 'max_slope', 'mean_slope': 'mean_slope', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_valmeyerCityValmeyerRoads_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_valmeyerCitycityLabels_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', });
lyr_valmeyerCitynewValmeyerParcels_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PARCEL_NUM': '', 'NOTES': '', 'SiteAddres': '', 'Acreage': '', 'Land': '', 'Farmland': '', 'Building': '', 'FarmBldg': '', 'UseCode': '', 'Shape_Leng': '', 'VacImp': '', 'Shape_Le_1': '', 'Shape_Area': '', 'elevMean': '', 'elevMin': '', 'elevMax': '', 'slopeMean': '', 'slopeMin': '', 'slopeMax': '', });
lyr_valmeyerCityold_valmeyer_parcels_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PARCEL_NUM': '', 'NOTES': '', 'SiteAddres': '', 'Acreage': '', 'Land': '', 'Farmland': '', 'Building': '', 'FarmBldg': '', 'UseCode': '', 'Shape_Leng': '', 'VacImp': '', 'min_elev': '', 'max_elev': '', 'mean_elev': '', 'min_slope': '', 'max_slope': '', 'mean_slope': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_valmeyerCityValmeyerRoads_3.set('fieldImages', {'fid': '', 'id': '', });
lyr_valmeyerCitycityLabels_4.set('fieldImages', {'fid': '', 'id': '', 'Name': '', });
lyr_valmeyerCitynewValmeyerParcels_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PARCEL_NUM': 'no label', 'NOTES': 'no label', 'SiteAddres': 'no label', 'Acreage': 'no label', 'Land': 'no label', 'Farmland': 'no label', 'Building': 'no label', 'FarmBldg': 'no label', 'UseCode': 'no label', 'Shape_Leng': 'no label', 'VacImp': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'elevMean': 'no label', 'elevMin': 'no label', 'elevMax': 'no label', 'slopeMean': 'no label', 'slopeMin': 'no label', 'slopeMax': 'no label', });
lyr_valmeyerCityold_valmeyer_parcels_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PARCEL_NUM': 'no label', 'NOTES': 'no label', 'SiteAddres': 'no label', 'Acreage': 'no label', 'Land': 'no label', 'Farmland': 'no label', 'Building': 'no label', 'FarmBldg': 'no label', 'UseCode': 'no label', 'Shape_Leng': 'no label', 'VacImp': 'no label', 'min_elev': 'no label', 'max_elev': 'no label', 'mean_elev': 'no label', 'min_slope': 'no label', 'max_slope': 'no label', 'mean_slope': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_valmeyerCityValmeyerRoads_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_valmeyerCitycityLabels_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_valmeyerCitycityLabels_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});