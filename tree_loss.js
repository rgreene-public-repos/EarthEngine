// Tree loss
// -----------
var hansenImage = ee.Image("UMD/hansen/global_forest_change_2015");
// Show the dataset.
console.log(hansenImage);
// Select the land/water mask.
var datamask = hansenImage.select('datamask');
var trees = hansenImage.select('treecover2000');
var lossmask = hansenImage.select('loss');

// Update the composite mask with the water mask.
var maskedComposite = datamask.updateMask(trees);
Map.addLayer(maskedComposite, {palette : "green"}, 'trees');

var maskedComposite = datamask.updateMask(lossmask);
Map.addLayer(maskedComposite, {palette : "red"}, 'loss');

// Zoom to a location.
Map.setCenter(115.983337,-31.925602, 7); 
