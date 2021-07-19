//we don't need to exports if there is a function in a module
//we siply require this module and output of addValues() will show up iş the app.js


const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1 + num2}`);
}

addValues()