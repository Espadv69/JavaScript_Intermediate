let screenProps = window.screen

// This shows an object with the screen properties
// Check the console to see the output
console.log(screenProps)

function showScreenAvailHeight() {
    console.log(window.screen.availHeight)
}

/**
 * Screen properties:
 * ------------------
 * *- width: The width of the screen
 * *- height: The height of the screen
 * *- availWidth: The width of the screen (excluding the Windows Taskbar) is the width of the screen minus the width of the Windows Taskbar
 * *- availHeight: The height of the screen (excluding the Windows Taskbar) is the height of the screen minus the height of the Windows Taskbar
 * *- availTop: The top position of the screen (excluding the Windows Taskbar)
 * *- availLeft: The left position of the screen (excluding the Windows Taskbar)
 * *- colorDepth: The color depth of the screen, in bits per pixel
 * *- pixelDepth: The color depth of the screen, in bits per pixel
 * *- isExtended: A boolean value that indicates whether the screen is extended. This means that the screen is not the primary screen and is not the only screen, returned true if the screen is extended, otherwise false
 * *- onchange: An event handler that runs when the screen changes, such as when a user changes the display settings. This means that the screen resolution, color depth, or other properties have changed, returned null if no event handler is set
 * 
 * Screen orientation:
 * -------------------
 * *- orientation: The orientation of the screen, returned an object with the following properties:
 * *- angle: The angle of the screen, in degrees, returned 0, 90, 180, or 270
 * *- type: The type of the screen, returned one of the following values: "landscape-primary", "landscape-secondary", "portrait-primary", or "portrait-secondary"
 *
 **/


/**
 * Color depth:
 * ------------
 * *- 1 bit: 2 colors
 * *- 4 bit: 16 colors
 * *- 8 bit: 256 colors
 * *- 16 bit: 65,536 colors (Highcolor)
 * *- 24 bit: 16,777,216 colors (Truecolor)
 * *- 32 bit: 4,294,967,296 colors + alpha channel (Deepcolor)
 **/
