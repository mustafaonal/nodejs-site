//https://nodejs.org/dist/latest-v14.x/docs/api/

//modules   -encapsulated code (only share minimum), every file is module (commonJs)


const names = require('./names_module');
//const {john, peter} = require('./names_module');
const sayHi = require('./utils_module');
const items = require('./alternative')


console.log(items);
console.log(items.items);
console.log(items.items[0]);
console.log(items.singlePerson);
console.log(items.singlePerson.name);
console.log(items.singlePerson.age);

//console.log(names);
sayHi(names.john)
sayHi(names.peter)
sayHi('cagatay')

require('./mind_grenade')
