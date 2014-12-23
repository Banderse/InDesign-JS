if(app.selection.length != 0){
    var myTexts = app.selection[0];
    switch (myTexts.constructor.name){
        case "TextFrame":
        var myTexts = app.selection[0].texts[0]; break;
        case "InsertionPoint":
        var myTexts = app.selection[0].paragraphs[0]; break;
        default: var myTexts = app.selection[0];
        }
    }
    else{
        myTexts = app.activeDocument.stories.everyItem().texts[0];
        }
{
    with (myTexts)
    {
// SECTION FOR SINGLE LINE FIX
hyphenation = false;
composer = "Adobe Single-line Composer";
noBreak = true;
kerningMethod = "Metrics";
ignoreEdgeAlignment = false;

// SECTION FOR FONT
//~ appliedFont = "Century Gothic";
//~ fontStyle = "Bold";

//~ ChangecaseMode.lowercase;
minimumWordSpacing = 300;
minimumGlyphScaling = 50;
maximumLetterSpacing = 100;
desiredLetterSpacing = 100;
minimumLetterSpacing = 100;        
maximumGlyphScaling = 200;
desiredGlyphScaling = 200;
desiredWordSpacing = 300;
maximumWordSpacing = 300;
//~ tracking = 100;
horizontalScale = 1000;
}
}