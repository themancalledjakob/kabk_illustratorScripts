// this script creates a pattern of polygons 
(function() {
    var myDoc = app.activeDocument;

    var _perlin;

    var _height = myDoc.height;
    var _width = myDoc.width;

    var patternGridSize = 25;
    var patternPadding = 5;

    var patternHorizontalCount = Math.floor(_width / (patternGridSize*2 + patternPadding));
    var patternVerticalCount = Math.floor(_height / (patternGridSize*2 + patternPadding));

    var artLayer = myDoc.layers.add();
    
    for (var x = 0; x < patternHorizontalCount; x++) {
        for (var y = 0; y < patternVerticalCount; y++) {
            var centerX = x * (patternGridSize*2 + patternPadding) + patternGridSize + patternPadding;
            var centerY = y * (patternGridSize*2 + patternPadding) + patternGridSize + patternPadding;
            var sides = Math.floor(Math.sin(x * 0.5+y) * 5 + 8); 
            var poly = artLayer.pathItems.polygon(
                centerX, 
                centerY, 
                patternGridSize, 
                sides 
            );
            poly.horizontalScale = 0.5;
        }
    }
})();
