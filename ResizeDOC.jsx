
// SCALE MATRIX (1.5 = 150% ) ( 2 = 200% )
var scaleMatrix = .63875;

var doc = app.activeDocument;
var allItems = doc.pages.item(0).pageItems.everyItem();
app.transformPreferences.whenScaling = WhenScalingOptions.APPLY_TO_CONTENT;
app.transformPreferences.adjustStrokeWeightWhenScaling = true;
app.transformPreferences.dimensionsIncludeStrokeWeight = true;
app.transformPreferences.transformationsAreTotals = true;
var myScaleMatrix = app.transformationMatrices.add(scaleMatrix,scaleMatrix);
    allItems.transform(CoordinateSpaces.pasteboardCoordinates, AnchorPoint.centerAnchor, myScaleMatrix);


// ENTER PAGE DIMENSIONS 2 Lines down - dimensions are in inches
var docDimensions = app.activeDocument.pages[-1];
pgWide = 10.2, pgHigh = 12.5;  
docDimensions.resize (
    CoordinateSpaces.INNER_COORDINATES,  
    AnchorPoint.CENTER_ANCHOR,  
    ResizeMethods.REPLACING_CURRENT_DIMENSIONS_WITH,  
          [pgWide*72, pgHigh*72] );

for (var a=0; a<doc.pages.length; a++){
doc.pages[a].marginPreferences.top = "0 in";
doc.pages[a].marginPreferences.bottom = "0 in";
doc.pages[a].marginPreferences.left = "0 in";
doc.pages[a].marginPreferences.right = "0 in";
}

var currentSelection = app.selection[0];
try
    {
currentSelection.resize (
    CoordinateSpaces.INNER_COORDINATES,  
    AnchorPoint.CENTER_ANCHOR,  
    ResizeMethods.REPLACING_CURRENT_DIMENSIONS_WITH,  
          [pgWide*72, pgHigh*72] );
app.activeDocument.align(currentSelection,AlignOptions.HORIZONTAL_CENTERS, AlignDistributeBounds.PAGE_BOUNDS);
app.activeDocument.align(currentSelection,AlignOptions.VERTICAL_CENTERS, AlignDistributeBounds.PAGE_BOUNDS);
    }
catch (myError)
    {
    exit ()
}
