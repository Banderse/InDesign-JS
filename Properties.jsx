function alert_scroll (title, input){
   if (input instanceof Array)
       input = input.join ("\r");
   var w = new Window ("dialog", title);
   var list = w.add ("edittext", undefined, input, {multiline: true, scrolling: true});
   list.maximumSize.height = w.maximumSize.height-100;
   list.minimumSize.width = 250;
   w.add ("button", undefined, "Close", {name: "ok"});
   w.show ();
}
 
//~ var reflectProperties = app.colorSettings;
var reflectProperties = app.selection[0]; 
 
alert_scroll("Object properties", reflectProperties.reflect.properties.sort());