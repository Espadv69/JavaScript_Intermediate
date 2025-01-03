const youtube = document.querySelector('.youtube') // Select the youtube element (button) from the HTML
youtube.addEventListener('click', () => { window.open('https://www.youtube.com') }) // Open the youtube link when the youtube element (button) is clicked

const google = document.querySelector('.google') // Select the google element (button) from the HTML
google.addEventListener('click', () => { window.open('https://www.google.com', '_blank') }) // Open the google link when the google element (button) is clicked

const facebookUrl = 'https://www.facebook.com' // Store the facebook URL in a variable
const facebook = document.querySelector('.facebook') // Select the facebook element (button) from the HTML
facebook.addEventListener('click', () => { window.open(facebookUrl, '_blank') }) // Open the facebook link when the facebook element (button) is clicked

/** 
 * window.open() is a method that opens a new browser window or a new tab depending on the browser settings.
 * The first parameter is the URL of the page to open. It is a required parameter.
 * We can store the URL in a variable and pass the variable as the first parameter.
 * The second parameter is the name of the window. '_blank' is used to open the page in a new tab. It is an optional parameter.
 * If the second parameter is not provided, the page will open in the same tab.
 * 
 * window.open('https://www.youtube.com') opens the youtube page in the same tab. Not always.
 * window.open('https://www.google.com', '_blank') opens the google page in a new tab.
 **/