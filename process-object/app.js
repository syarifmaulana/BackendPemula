const coffee = require('./coffee');
 
console.log(coffee);



/**
* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
*/
const { firstName, lastName } = require('./user');
 
 
console.log(firstName);
console.log(lastName);