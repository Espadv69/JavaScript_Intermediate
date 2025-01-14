const blankWindowUrl = 'about:blank'

let newWindow
function openBlankWindow() {
  newWindow = window.open(blankWindowUrl, '_blank')
}

function closeBlankWindow() {
  if (newWindow) {
    newWindow.close()
  }
}

let openGoogle = window.open('https://www.google.com', '_blank') // open a new window when the script runs

if (openGoogle) {
  console.log(openGoogle.closed) // false
}

openGoogle.close() // close the window immediately

setTimeout(() => {
  console.log(openGoogle.closed) // true
}, 1000) // 1 second delay to check the window status

/**
 * The close() method closes the window. If the window is already closed, the method does nothing.
 * 
 * The closed property is a read-only property that returns a Boolean value indicating whether the window has been closed or not.
 */