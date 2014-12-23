                    var myIndesignDoc=app.activeDocument;
                    var myParStyles = myIndesignDoc.paragraphStyles;
                    var myCharStyles = myIndesignDoc.characterStyles;
                    var myUnusedSwatches = myIndesignDoc.unusedSwatches;
                    
                    for (var j=myIndesignDoc.unusedSwatches.length; j > 0; j--){
                      myIndesignDoc.unusedSwatches[j-1].remove();  
                    }

                    for (j = myParStyles.length-1; j >= 2; j-- ) {
                       removeUnusedParaStyle(myParStyles[j]);
                    }

                    for (i = myCharStyles.length-1; i >= 1; i-- ) {
                       removeUnusedCharStyle(myCharStyles[i]);
                    }

                    
                    function removeUnusedParaStyle(myPaStyle) {
                       app.findTextPreferences = NothingEnum.nothing;
                       app.changeTextPreferences = NothingEnum.nothing;
                       app.findTextPreferences.appliedParagraphStyle = myPaStyle;
                       var myFoundStyles = myIndesignDoc.findText();
                          if (myFoundStyles == 0) {
                             myPaStyle.remove();
                          }

                       app.findTextPreferences = NothingEnum.nothing;
                       app.changeTextPreferences = NothingEnum.nothing;
                    }
                    
                    function removeUnusedCharStyle(myChStyle) {
                       app.findTextPreferences = NothingEnum.nothing;
                       app.changeTextPreferences = NothingEnum.nothing;
                       app.findTextPreferences.appliedCharacterStyle = myChStyle;
                       var myFoundStyles = myIndesignDoc.findText();
                          if (myFoundStyles == 0) {
                             myChStyle.remove();
                          }
                       app.findTextPreferences = NothingEnum.nothing;
                       app.changeTextPreferences = NothingEnum.nothing;
                    }

app.menuActions.item("$ID/Add All Unnamed Colors").invoke();
var _loadSwatches = File('/X/PIT/STANDARDS/COLOR_MASTER/ColorComboMASTER.indd');
if ( _loadSwatches != null ) {
try { app.activeDocument.loadSwatches ( _loadSwatches ) }
catch ( _ ) { alert ( _ ) }
}
var myIDOc = app.activeDocument;
var mySwatch = myIDOc.swatches;
for (j=mySwatch.length-1; j>=0; j--){
//~     try{
//~          if(mySwatch[j].space ==ColorSpace.RGB){
    if(mySwatch[j].name=="C=9 M=18 Y=40 K=1"){
    mySwatch[j].remove("Yellow CNV REDE (TPX 13-0922)");
    }
    if(mySwatch[j].name=="C=58 M=56 Y=53 K=26"){
    mySwatch[j].remove("Brown CNV REDE (Pet Silhouette)");
    }
    if(mySwatch[j].name=="C=22 M=27 Y=41 K=1"){
    mySwatch[j].remove("Stone CNV REDE (FDay13)");
    }
    if(mySwatch[j].name=="C=40 M=32 Y=33 K=0"){
    mySwatch[j].remove("Grey Stone CNV (Fall 14)");
    }
    if(mySwatch[j].name=="C=4 M=27 Y=91 K=0"){
    mySwatch[j].remove("Gold CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=100 M=88 Y=39 K=40"){
    mySwatch[j].remove("Dark Blue CNV (Vintage Sports)");
    }
    if(mySwatch[j].name=="C=90 M=40 Y=88 K=41"){
    mySwatch[j].remove("Dark Green CNV (Vintage Sports)");
    }
    if(mySwatch[j].name=="C=4 M=39 Y=85 K=0"){
    mySwatch[j].remove("Gold CNV REDE (Common)");
    }
    if(mySwatch[j].name=="PANTONE 18-1555 TCX"){
    mySwatch[j].remove("Red CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=25 M=91 Y=56 K=10"){
    mySwatch[j].remove("Dark Red CNV REDE (Vintage)");
    }
    if(mySwatch[j].name=="C=17 M=88 Y=17 K=0"){
    mySwatch[j].remove("Magenta CNV (Fall 14)");
    }
    if(mySwatch[j].name=="Teal PAP REDE (Fall13)"){
    mySwatch[j].remove("Teal CNV REDE (Fall13)");
    }
    if(mySwatch[j].name=="Moss PAP REDE (Fall13)"){
    mySwatch[j].remove("Moss CNV REDE (Fall13)");
    }
    if(mySwatch[j].name=="IceBLUE PAP REDE (TPX 16-4114)"){
    mySwatch[j].remove("Ice Blue CNV REDE (Fall13)");
    }
    if(mySwatch[j].name=="Golden Haze Yellow PAP (Spr 14)"){
    mySwatch[j].remove("Golden Haze Yellow CNV (Spr 14)");
    }
    if(mySwatch[j].name=="Pink Burnt Coral PAP (Spr 14)"){
    mySwatch[j].remove("Pink Burnt Coral CNV (Spr 14)");
    }
    if(mySwatch[j].name=="Gossamer Green PAP (Spr 14)"){
    mySwatch[j].remove("Gossamer Green CNV (Spr 14)");
    }
    if(mySwatch[j].name=="Petit Four PAP (Spr 14)"){
    mySwatch[j].remove("Petit Four CNV (Spr 14)");
    }
    if(mySwatch[j].name=="Yellow PAP REDE (TPX 13-0922)"){
    mySwatch[j].remove("Yellow CNV REDE (TPX 13-0922)");
    }
    if(mySwatch[j].name=="Purple PAP REDE (Common)"){
    mySwatch[j].remove("Purple CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Gold PAP REDE (Common)"){
    mySwatch[j].remove("Gold CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Orange PAP REDE (Common)"){
    mySwatch[j].remove("Orange CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Navy PAP REDE (Common)"){
    mySwatch[j].remove("Navy CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Burgundy PAP REDE (Common)"){
    mySwatch[j].remove("Burgundy CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Green PAP REDE (Common)"){
    mySwatch[j].remove("Green CNV REDE (Common)");
    }
    if(mySwatch[j].name=="LtGREY PAP REDE (FALL13)"){
    mySwatch[j].remove("Light Grey CNV REDE (Fall13)");
    }
    if(mySwatch[j].name=="Dusty Orange PAP (Spr 14)"){
    mySwatch[j].remove("Dusty Orange CNV (Spr 14)");
    }
    if(mySwatch[j].name=="Hot Pink PAP (Spr 14)"){
    mySwatch[j].remove("Hot Pink CNV (Spr 14)");
    }
    if(mySwatch[j].name=="Dark Denim PAP (Spr 14)"){
    mySwatch[j].remove("Dark Denim CNV (Spr 14)");
    }
    if(mySwatch[j].name=="Honeydew PAP (Spr 14)"){
    mySwatch[j].remove("Honeydew CNV (Spr 14)");
    }
    if(mySwatch[j].name=="C=22 M=87 Y=65 K=17"){
    mySwatch[j].remove("Red CNV REDE (Common)");
    }
    if(mySwatch[j].name=="REDE Red"){
    mySwatch[j].remove("Red CNV REDE (Common)");
    }
    if(mySwatch[j].name=="c48m47y44k22"){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=48 M=47 Y=44 K=28"){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="PANTONE 18-0403 TCX "){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=50 M=45 Y=46 K=27"){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="REDE Grey"){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=48 M=47 Y=44 K=22"){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="REDE Grey CNV"){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="R=119 G=109 B=110"){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=9 M=100 Y=95 K=13"){
    mySwatch[j].remove("Red CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Pink PAP REDE (Winter14)"){
    mySwatch[j].remove("Pink CNV REDE (Winter14)");
    }
    if(mySwatch[j].name=="Grey PAP REDE (Common)"){
    mySwatch[j].remove("Grey CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Stone PAP REDE (FDay13)"){
    mySwatch[j].remove("Stone CNV REDE (FDay13)");
    }
    if(mySwatch[j].name=="Red PAP REDE (Common)"){
    mySwatch[j].remove("Red CNV REDE (Common)");
    }
    if(mySwatch[j].name=="REDE Red CNV"){
    mySwatch[j].remove("Red CNV REDE (Common)");
    }
    if(mySwatch[j].name=="PANTONE 18-1555 TCX "){
    mySwatch[j].remove("Red CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=0 M=0 Y=0 K=0"){
    mySwatch[j].remove("Paper");
    }
    if(mySwatch[j].name=="C=0 M=2 Y=6 K=0"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=2 M=1 Y=6 K=0"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="RE canvas ivory"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="REDE Ivory"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="R=255 G=248 B=237"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="REDE Ivory CNV"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=4 M=5 Y=11 K=0"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=0 M=1 Y=6 K=0"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="c0m2y6k0"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=0 M=6 Y=2 K=0"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="R=255 G=248 B=237"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Ivory PAP REDE (Common)"){
    mySwatch[j].remove("Ivory CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Blue PAP REDE (Common)"){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="PANTONE 18-4020 TCX "){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=72 M=50 Y=31 K=7"){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="c72m50y34k8"){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="REDE Dark Blue"){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=72 M=50 Y=34 K=8"){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="R=85 G=112 B=135"){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Navy Blue CNV"){
    mySwatch[j].remove("Navy CNV REDE (Common)");
    }
    if(mySwatch[j].name=="Orange CNV"){
    mySwatch[j].remove("Orange CNV REDE (Common)");
    }
    if(mySwatch[j].name=="REDE Dark Blue CNV"){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="R=85 G=112 B=135"){
    mySwatch[j].remove("Blue CNV REDE (Common)");
    }
    if(mySwatch[j].name=="C=20 M=93 Y=91 K=9"){
    mySwatch[j].remove("Molten Lava (Kids Pets)");
    }
    if(mySwatch[j].name=="C=67 M=20 Y=25 K=0"){
    mySwatch[j].remove("Lt Blue CNV (Fall 14)");
    }
    if(mySwatch[j].name=="C=43 M=19 Y=78 K=0"){
    mySwatch[j].remove("Green CNV (Fall 14)");
    }
    if(mySwatch[j].name=="C=17 M=89 Y=17 K=0"){
    mySwatch[j].remove("Magenta CNV (Fall 14)");
    }
    if(mySwatch[j].name=="C=100 M=44 Y=0 K=56"){
    mySwatch[j].remove("Navy CNV REDE (Common)");
    }
        }
   
var myIndesignDoc = app.activeDocument;
var myUnusedSwatches = myIndesignDoc.unusedSwatches;
for (var s = myUnusedSwatches.length-1; s >= 0; s--) {
     var mySwatch = myIndesignDoc.unusedSwatches[s];
     var name = mySwatch.name;
 // alert (name);
  if (name != ""){
 mySwatch.remove();
 }
}
app.activeDocument.swatches.itemByRange(4,app.activeDocument.swatches. length-1).model = 1936748404;