function showPrompt() {
  const name = window.prompt('Enter your name') // prompt returns a string
  alert(`Hello, ${name}`) // This returns Hello, <name> in an alert box

  // const name = prompt('Enter your name')  // This is the same as window.prompt()
  // alert(`Hello, ${name}`) // This returns the same as above
}

/**
 * prompt() is a method that displays a dialog box that prompts the visitor for input.
 * 
 * It returns a string containing the text entered by the user, or null.
 **/
