/**
 * Created by Athinodoros on 14/2/2016.
 */

/*

 GENERAL
 -------
 All objects in JavaScript are descended from Object; all objects inherit
 methods and properties from Object.prototype (some methods might be overridden)


 A really good source  to read about this is : https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

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
//--------------------------------------------this code is only to be used for the examples -------------------------

// example

var a = [1, 2, 2, 2];
var b = {};
var c = true;
var d = "Hi";
var e = 123;
var f = new Date();
var myPet = new Pet('','','','');
console.log("break");

/*
 with right click debug '07_Objects_everywhere'
 It is possible to observe what every variable looks like under the hood
 and the conclusion of that is that apart from the primitive type variables
 all the others inherit from Object even the custom made Object Pet.

 Yeah that's all for this one :)
 */