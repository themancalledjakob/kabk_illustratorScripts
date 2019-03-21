(function() {
    // Creates a new document, adds a simple text item
    // then incrementally increases the horizontal and 
    // vertical scale attributes of each character
    //
    // first, create a new document
    var docRef = documents.add();
    // create a new textframe
    var textRef = docRef.textFrames.add();
    // add your own text to it
    textRef.contents = "I Love Scripting!";
    // set the position of the textframe
    textRef.top = 400;
    textRef.left = 100;

    // get the amount of characters in the textframe
    var charCount = textRef.textRange.characters.length;
    // start with 100% of the size
    var size = 100;
    // then go through each letter
    for(var i=0; i<charCount; i++) {
        // apply the size horizontally and vertically
        textRef.textRange.characters[i].characterAttributes.horizontalScale=size;
        textRef.textRange.characters[i].characterAttributes.verticalScale=size;
        // incrementally increase the size
        size *= 1.2;
    }
})();
