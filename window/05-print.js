function printPage() {
  window.print(); // Open the print dialog
  // print(); // This will also work. The same as window.print()
  // Because the window object is the global object, you can omit the window prefix.
}

/**
 * The `window.print()` method opens the print dialog of the browser.
 * 
 * When the user clicks the print button, the browser will open the print dialog.
 **/