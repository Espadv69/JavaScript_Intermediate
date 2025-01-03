const youtube = document.querySelector('.youtube') // Select the youtube element (button) from the HTML
youtube.addEventListener('click', () => { window.open('https://www.youtube.com') }) // Open the youtube link when the youtube element (button) is clicked

const google = document.querySelector('.google') // Select the google element (button) from the HTML
google.addEventListener('click', () => { window.open('https://www.google.com', '_blank') }) // Open the google link when the google element (button) is clicked
