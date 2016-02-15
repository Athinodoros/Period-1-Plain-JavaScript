/**
 * Created by Athinodoros on 15/2/2016.
 */
var myModule = require("./10_user_defined_reusable_modules.js");
//by requiring my javascript file I now have access to the functions I exported


console.log(myModule);
//as we can see in the console we have all three functions
// now lets use it!

//       -----------------
//       ----EXAMPLES-----
//       -----------------

// example 1
console.log("------ example 1 ------");

//use of the add two numbers
console.log('Calling addTwoNumbers from my module with 5 and 5 : '+myModule.addTwoNumbers(5,5));
//the think with that function is that you access the 'private' function myHiddenFunction through
// the addTwoNumbers function but I am still not aware of it for real.

// example 2
console.log("------ example 2 ------");

myModule.sayHello();

// example 3
console.log("------ example 3 ------");

console.log("Passing an array of integers (10*10)  : "+myModule.addManyPublic([10,10,10,10,10,10,10,10,10,10]));

/*
now the next step is to upload my module on npm if I want but since my module is basically useless I will not :)
 */




