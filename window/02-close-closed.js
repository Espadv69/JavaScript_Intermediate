const blankWindowUrl = 'about:blank'
let newWindow = null

function openBlankWindow() {
  newWindow = window.open(blankWindowUrl)
}

function closeBlankWindow() {
  if (newWindow) {
    newWindow.close()
  }
}


// open a new window and close the current window when the button is clicked
