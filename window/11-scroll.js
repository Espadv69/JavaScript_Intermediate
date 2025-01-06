function scrollToBottom() {
  window.scroll({
    top: 400, // how far to scroll vertically
    behavior: 'smooth' | 'auto' // smooth is smooth scrolling, auto is instant scrolling
  })
}

/**
 * window.scroll() is a method that scrolls the window to a particular place in the document.
 * The first parameter is an object with the properties top and left.
 * The second parameter is an object with the property behavior. (optional)
 * The top property is the vertical position to scroll to.
 * The left property is the horizontal position to scroll to.
 */