/**
 * Created by Athinodoros on 11/2/2016.
 */


/*

GENERAL
--------
Hoisting, a JavaScript feature that allows you to make forward references to functions and variables.

JavaScript compilers hoist variable declaration to the top of the document
or the top of a function depending what their score is.
 */


//       -----------------
//       ----EXAMPLES-----
//       -----------------


//example 1
console.log('------example 1------');
console.log(Subject);

var Subject = "JavaScript is COOL !!!";

console.log(Subject);

/*
This will return undefined first as if we had declared Subject to be a variable first.
And that is because the compiler will do that and the actual code that will be executed
looks like that:

 var Subject;

 console.log(Subject);

 Subject = "JavaScript is COOL !!!";

 console.log(Subject);

 */

// example 2

console.log('------example 2------');
console.log(myFunction());

function myFunction(){
    return "i am declared now";
}


/*
In this case the function declaration is done on the top.

and the code that runs looks like that:


 function myFunction(){
 return "i am declared now";
 }

 console.log(myFunction());

 */

// example 3

/*
This is not always the case with functions and what matters is the way you declare them
 */
console.log('------example 3------');


console.log(myFunctionHolder);

var myFunctionHolder = function mySecondFunction(){
    return "now my function is working properly";
}
console.log(myFunctionHolder());


/*
This phenomenon takes place because the variable myFunctionHolder is declared on the top
 but the function is not yet assigned to it yet.

 The code that runs in this case looks like that :

 var myFunctionHolder;

 console.log(myFunctionHolder);

 myFunctionHolder = function mySecondFunction(){
 return "now my function is working properly";
 }
 console.log(myFunctionHolder());

 */
