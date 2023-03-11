// News Report
// -----------
// http://www.perthnow.com.au/news/western-australia/wa-bushfires-emergency-warning-as-blaze-burns-towards-homes-in-bedfordale/news-story/6bf352dd1a1f8139686823ec7fbcdd38
// -----------
// Fire detection
var imageCollection = ee.ImageCollection("MODIS/006/MYD14A1");
var images = imageCollection.filterDate('2017-02-8', '2017-02-11')
console.log(images.first());
var image = ee.Image(images.max());
 
Map.addLayer(image, {palette : "red"}, 'fire detection');

// Zoom to a location.
Map.setCenter(115.983337,-31.925602, 7); 
