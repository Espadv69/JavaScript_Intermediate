const protocol = window.location.protocol;
console.log(protocol); // In my case, file:

/**
 * The window.location.protocol property returns the protocol of the current URL, including the colon (:).
 * 
 * If the URL is http://www.example.com, the protocol is http:
 * If the URL is https://www.example.com, the protocol is https:
 * If the URL is file:///Users/username/Documents/index.html, the protocol is file:
 * If the URL is ftp://ftp.example.com, the protocol is ftp:
 */