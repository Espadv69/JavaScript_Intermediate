function showConfirm() {
  // confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
  let confirm = window.confirm('do you want to continue with this action?')

  if (confirm) {
    alert('success, check the console')
    console.log('Is the user confirmed?', confirm)
  } else {
    alert('success, check the console')
    console.log('Is the user confirmed?', confirm)
  }

}

/**
 * The confirm() method returns true if the user clicked "OK", and false otherwise.
 * 
 * The confirm() method is often used to ask if the user wants to do something, and can be used to ask for a confirmation before executing something.
 **/