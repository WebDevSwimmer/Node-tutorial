console.log(__filename);
console.log( __dirname );
function printHello() {
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
setInterval(printHello, 2000);