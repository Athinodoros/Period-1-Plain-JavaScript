/**
 * Created by Athinodoros on 14/2/2016.
 */

/*

 GENERAL
 -------
 Callbacks are widely used in JavaScript and Javascript Libraries.

 Usually we use a callback when we are passing arguments to a function
 and one or more of them need to be calculated on the fly, or need a custom function as
 a comparator.

 The callback is executed at some point inside the containing function’s
 body just as if the callback were defined in the containing function

 User defined CallBacks give the user flexibility and control of the outcome.
 */
var myArray = new Array('Lars', 'Jan', 'Bo', 'Frederik');

//exapme 1

console.log('------ example 1 ------');
var filtered = myArray.filter(function (name) {
    if (name.length <= 3) {
        return name;
    }
});
console.log(filtered);


//example 2
console.log('------ example 2 ------');

var uppered = myArray.map(function (item) {
    return item.toUpperCase();
});

console.log(uppered);

/*
 There are tones of example we could pass in like converting the names to numbers according their size etc.
 This gives us endless options and many hours of Fun playing around with JavaScript
 */

