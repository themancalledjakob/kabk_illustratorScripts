function giveCharactersCharacter(textRef) {
    var charCount = textRef.textRange.characters.length;
    var fontCount = textFonts.length;
    for(var i=0; i<charCount; i++) {
        // set a random font for each character
        var fontIndex = Math.floor(Math.random() * fontCount);
        var characterAttributes = textRef.textRange.characters[i].characterAttributes;
        characterAttributes.textFont = textFonts.getByName(textFonts[fontIndex].name);

        // set a random color for each character
        var randomColor = new RGBColor();
        randomColor.red = Math.floor(Math.random() * 255);
        randomColor.green = Math.floor(Math.random() * 255);
        randomColor.blue = Math.floor(Math.random() * 255);
        characterAttributes.fillColor = randomColor;

        // why not rotate the letters?
        var rotation = i * 1.1;
        characterAttributes.rotation = rotation;
        
        // since we're at it..
        // we could use a sinus/cosinus function to scale the letters
        // Math.sin()/Math.cos() give us values between -1 and 1
        // so, if we want our scales to be between 100 and 200,
        // we need to multiply by 100, then our values are between -100 and +100
        // if we add then 200, our values are between 100 and 200 (yesss).
        // https://hackernoon.com/math-sin-and-math-cos-the-creative-coders-best-friend-597d69000644
        // https://imgur.com/a/VTMUq
        var horizontalScale = Math.sin(i * 0.1) * 100 + 200;
        characterAttributes.horizontalScale = horizontalScale;
        var verticalScale = Math.cos(i * 0.1) * 100 + 200;
        characterAttributes.verticalScale = verticalScale;
    }
}

(function() {
    var docRef = app.activeDocument;
    var textRefs = docRef.textFrames;
    for (var i = 0; i < textRefs.length; i++) {
        giveCharactersCharacter(textRefs[i]);
    }
})();
