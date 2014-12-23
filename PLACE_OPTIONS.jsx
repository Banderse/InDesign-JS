// ShowPDFoptions.js

// Version 2

// An InDesign CS and CS2 Javascript

// Allows you to change the properties of an imported PDF
// such as crop, imported page, transparent background
// whilst keeping all the properties of the object.

// Install into your indesign/scripts directory

// Select a box containing an imported PDF and run this script
// by selecting it in the scripts palette.

// www.luxlucid.com

myDoc = app.activeDocument;

if( myDoc.selection.length == 0 ){err("No selection.");}

if( myDoc.selection[0].constructor.name != "PDF" ){
//Test if it is a container
try {
	if (myDoc.selection[0].contentType == ContentType.graphicType){
		//Is first content PDF?
			try {
					if (myDoc.selection[0].allGraphics[0].constructor.name == "PDF"){
						placePDF(myDoc.selection[0].allGraphics[0]);
					} else {
						err("No PDF content embedded.");
					}
			} catch (e){
				err("No PDF content embedded.");
			}
	} else {
		err("Select an imported PDF.");
	}
} catch (e){
	err("Select an imported PDF.");
}


} else {
	placePDF(myDoc.selection[0]);
}

exit();


function placePDF(n){
	try {
	if (app.version == 3){
		//cs1
		myDoc.selection[0].place(n.itemLink.filePath,1,1,1,1, undefined);
	} else if (String(app.version).split(".")[0] == 7){ 
		//cs2
		myDoc.selection[0].place(n.itemLink.filePath,1, undefined);
	}
	
	} catch (e){
		//err("Unknown error!");
	}
}



function err(e){
	alert(e);
	exit();
}

