const pathname = window.location.pathname;
console.log(pathname); // In my case, shows: /C:/Users/username/Desktop/Projects/JavaScript/JavaScript-Projects/JavaScript-Projects/index.html

/**
 * The pathname property of the Location interface returns a USVString containing an initial '/' followed by the path of the URL.
 * 
 * The path is the part of the URL after the domain name, including the port (if any).
 * 
 * If the URL does not contain a path, this property will contain a single '/' character.
 * 
 * The value of pathname is the entire path component of the URL after the domain name, including any initial slash ('/').
 **/