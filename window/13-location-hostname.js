const hostname = window.location.hostname;
console.log(hostname); // In my case, if I run this code in live server, it will return localhost

// If you reveal the hostname, you can see the domain name of the website you are currently on.
// For example, if you are on google.com, the hostname will be google.com
// If you are on facebook.com, the hostname will be facebook.com
// If you are on localhost, the hostname will be localhost
// If you are not in a website or you are in a local file, the hostname will be an empty string