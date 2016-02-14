/**
 * Created by Athinodoros on 12/2/2016.
 */


/*

 GENERAL
 -------

 The this keyWord work differently in JavaScript than other Object oriented Languages like Java and C#


 There is no unified definition of the this keyWord in  Javascript because it depends on
 the context you are using/calling the this this keyword.

 for example if you call the 'this' keyword in the global context then 'this' will be referring to the global object.

 But it is easier to explain with some  examples!!
 Because the 'this' keyword works differently in plain javascript and node
 please open this_page.html on your browser and read the console through your developers window

 :)


 */

//--------------------------------------------this code is only to be used for the examples -------------------------
var random = 12;
var logIt = function () {
    return this.random;
}
console.log(logIt());

//--------------------------------------------this code is only to be used for the examples -------------------------


// example 1
console.log("------ example 1 ------");
function f1() {
    return this;
}
console.log((f1() === window));
console.log(" this is the window");
/*
 this example will return the global object;
 */

// example 2
console.log("------ example 2 ------");
function f2() {
    "use strict"; // see strict mode
    return this;
}

console.log((f2() === undefined));
console.log(" this is undefined (strict mode)")

/*
 in this case we are using strict mode so this refer to what we set it to
 and in this case we didn't so it is undefined
 */

// example 3
console.log("------ example 3 ------");

var dog = {
    name: "Jack",
    weigh: 10,
    color: "red",
    random: "doggy",
    getname: function () {
        return this.name
    },
    getRandom: logIt()
}
console.log(dog.getname());
console.log(logIt.apply(dog));

/*
 by applying dog to logIt we change the 'this' of logIt so it reaches out to dog.random

 we would have the same outcome with logIt.call but then we could pass a list of arguments
 */


/*
the list of examples could go on forever but lets leave it here for now :)
 */