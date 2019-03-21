
//This script takes all the text in the current document and applies various character styles per letter.
//Per character it applies a random font, random color, and interpolates rotation and font-size.

// first, let's create a function.
// We don't know how many textframes there are in the document, so it's easier to just have it a function,
// which we can pass a textframe (textRef) as function argument.
// here it is:
function giveCharactersCharacter(textRef) {
    // first, let's check how many characters the text has 
    var charCount = textRef.textRange.characters.length;
    // textFonts is a illustrator internal Object, which stores information about the fonts installed on your system
    // now let's check how many fonts you have installed and store it in fontCount
    var fontCount = textFonts.length;
    // iterate through each character 
    for(var i=0; i<charCount; i++) {
        // get a random font
        // Math.random() gives us a random value between 0 and 1
        // if we multiply it by fontCount, we get a random value between 0 and the amount of fonts you have
        // then we need to use Math.floor() to round the number, so we can use it to get a proper fontIndex
        var fontIndex = Math.floor(Math.random() * fontCount);
        // store characterAttributes of the current character in a variable for convenience 
        // (or do you want to write textRef.textRange.characters[i].characterAttributes each time?)
        var characterAttributes = textRef.textRange.characters[i].characterAttributes;

        // now we got everything in place to set a random font for the current charater
        characterAttributes.textFont = textFonts.getByName(textFonts[fontIndex].name);

        // set a random color for each character
        var randomColor = new RGBColor();
        randomColor.red = Math.floor(Math.random() * 255);
        randomColor.green = Math.floor(Math.random() * 255);
        randomColor.blue = Math.floor(Math.random() * 255);
        // set the color
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
// here the main function, which starts when the script is run
(function() {
    // get the active document
    var docRef = app.activeDocument;
    // get all textframes
    var textRefs = docRef.textFrames;
    // iterate through all textframes
    for (var i = 0; i < textRefs.length; i++) {
        // and apply our FUNction :-)
        giveCharactersCharacter(textRefs[i]);
    }
})();
