// this script creates a pattern of polygons 
(function() {
    var myDoc = app.activeDocument;

    var _perlin = new SimplexNoise();

    var _height = myDoc.height;
    var _width = myDoc.width;

    var patternGridSize = 50;
    var patternPadding = 5;

    var patternHorizontalCount = Math.floor(_width / (patternGridSize + patternPadding));
    var patternVerticalCount = Math.floor(_height / (patternGridSize + patternPadding));

    var artLayer = myDocument.layers.add();

    // make a gradient for the polygons
    var gradientRef = app.activeDocument.gradients.add();

    // Create new color
    var startColor = new RGBColor();
    startColor.red = 0;
    startColor.green = 0;
    startColor.blue = 0;
    
    // Create new color
    var startColor = new RGBColor();
    startColor.red = 255;
    startColor.green = 255;
    startColor.blue = 255;
    
    // add the gradientstops and apply color and position
    gradientRef.gradientStops.add();
    gradientRef.gradientStops.add();
    gradientRef.gradientStops[0].color = startColor;
    gradientRef.gradientStops[0].ramPoint = 0;
    gradientRef.gradientStops[1].color = endColor;
    gradientRef.gradientStops[1].ramPoint = 100;
    
    for (var x = 0; x < patternHorizontalCount; x++) {
        for (var y = 0; y < patternVerticalCount; y++) {
            var centerX = x * (patternGridSize + patternPadding);
            var centerY = y * (patternGridSize + patternPadding);
            var noiseValue = _perlin.noise(x,y);
            var sides = noiseValue * 5 + 3; 
            var poly = artLayer.pathItems.polygon(
                centerX, 
                centerY, 
                patternGridSize, 
                sides 
            );
            poly.horizontalScale = 0.5;
            poly.rotation = noiseValue * 120;
            poly.fillGradient = gradientRef;
        }
    }

})();
