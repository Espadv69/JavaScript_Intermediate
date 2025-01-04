function showScreenLeftTop() {
  let screenLeft = window.screenLeft // || window.screenX
  let screenTop = window.screenTop // || window.screenY

  console.log(`Screen left: ${screenLeft}`) // Print the screen left
  console.log(`Screen top: ${screenTop}`) // Print the screen top
}

/**
 * The screenLeft and screenTop properties are used to get the screen position of the window.
 * The screenLeft property returns the x-coordinate of the window relative to the screen.
 * The screenTop property returns the y-coordinate of the window relative to the screen.
 **/