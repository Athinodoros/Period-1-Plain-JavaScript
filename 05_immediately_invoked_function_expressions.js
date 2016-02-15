/**
 * Created by Athinodoros on 14/2/2016.
 */

/*

 GENERAL
 --------
 Immediately invoked function expressions(IIFE) are functions that runs as soon as they are defined.
 IIFE can be used to avoid variable hoisting from within blocks,and
 protect against polluting the global environment and simultaneously allow public access to methods
 while retaining privacy for variables defined within the function.

 (it like the static and simple block in java static{//code} or {//code} )

 USAGE
 --------

 1) simple IIFE
 (function() {
 // code code code and more code (like didn't have enough to do right ? )
 })();

 2) passing args IIFE

 (function(paramA,paramB){
 var getsA = paramA;
 var getsB = paramB;
 })("the" , "LARS");

 */


//       -----------------
//       ----EXAMPLES-----
//       -----------------

//example 1
console.log("------ example 1 -------");

(function () {
    console.log("I run myself !");
})();

/*
 So after running this file we can see the console log like we had called the function.
 */


//example 2
console.log("------ example 2 -------");

var functionHolder = (function () {
    return function () {
        console.log("I run myself !");
    }
})();

functionHolder();

/*
 We can use the IIFE along with the function closure as I demonstrate above and
 unwrap a function and assign it to a variable.
 */

//example 3
console.log("------ example 3 -------");

// it is also possible to pass arguments to a IIFE like this


(function addition(a){
    var sum =0;
    a.forEach(function(item){
        sum+= item;
    });
    console.log(sum);
})(new Array(2,2,2,2,2,2,10,7));

/*
this is very helpful and it is use by many frameworks out there.
Also some times you need to write code that you need to run immediately
that needs some arguments but also think you might need it again.
If that is the case this is a ''two birds with one stone'' situation.
 */





