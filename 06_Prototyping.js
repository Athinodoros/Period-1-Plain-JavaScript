/**
 * Created by Athinodoros on 14/2/2016.
 */

/*

 GENERAL
 --------
 JavaScript allows you create objects not like all the other oriented languages but
 it also allows you to add fields and functionality to that object later on by adding
 fields and function to its prototype.

 All the predefined objects that come with the JavaScript language have prototypes
 and the new keyWork basically make a copy of that prototype and gives it to you. Now
 this object has some predefined functionality but what if you you want more?

 It is possible to add new functionality by calling the prototype of you object and attaching
 to it a new function for example.

 USAGE
 --------

 Object.prototype.'NammingOfYourChoice' = 'a function, a String, a number etc.';
 */

//       -----------------
//       ----EXAMPLES-----
//       -----------------

//--------------------------------------------this code is only to be used for the examples -------------------------

function Pet(name, size , color, food) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.food = food;
}

//--------------------------------------------/this code is only to be used for the examples -------------------------

//example 1
console.log('------example 1------');


var myDog = new Pet('Rolf','Dog Food', 'Brown', 'Medium');


var myCat = new Pet('Snow Ball', 'Small', 'White', 'Cat Food' );

// now console.log the whole object may do the job but
// wouldn't it be lovely to have a to string function we could call?
Pet.prototype.niceText = function (){
    console.log("my Name is : " +this.name +
                " \nI love eating : "+ this.food +
                " \nmy color is : "+ this.color +
                " \nand my size is "+ this.size+ "\n");
}

// now that i have my function I can call it for every pet created or will be in the future
myCat.niceText();
myDog.niceText();

/*
It is a good idea not to add functionality to an existing Objects Prototype
because you might override a method that already exists and loose default functionality
that you might need later in your code.
 */