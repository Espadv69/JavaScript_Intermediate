function showConfirm() {
  let confirmOperation = window.confirm('Are you sure you want to close this page?')

  if (confirmOperation) {
    window.close()
  } else {
    alert('You chose not to close the page')
  }
}