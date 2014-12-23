with(document.printPreferences) {
        activePrinterPreset = ("X1_SBL");
    }
app.menuActions.item("Fit Page in Window").invoke();
app.activeDocument.close(SaveOptions.yes)