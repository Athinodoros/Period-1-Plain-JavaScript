/**
 * Created by Athinodoros on 13/2/2016.
 */

/*

 GENERAL
 -------

 A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
 The closure has three scope chains: it has access to its own scope,
 it has access to the outer function’s variables, and it has access to the global variables.

 though it is not possible to access enclosed variables (variables defied in a function belong only to that
 function and its 'child'-functions. This helps a lot with variable name collision and 'hiding' some delicate variables
 or enabling access to them.

 */

//       -----------------
//       ----EXAMPLES-----
//       -----------------


//example 1
console.log('------example 1------');
var ghost;
function f1() {
    var ghost = "I live one in my function \n I have agoraphobia ";
    console.log(ghost);
}
f1();
console.log(ghost);

/*
 So no it doesn't.
 Now lets see if we can access him from the outside
 */
//example 2
console.log('------example 2------');

function f2() {
    var ghost2 = "I think I also have agoraphobia";

    function displayGhostWords() {
        console.log(ghost2);
    } 

    return displayGhostWords;
}

var myFunc = f2();
myFunc();

/*
 we can see what out ghost says from the outside but we still don't have the ghost
 we just have the brave messenger (a function) that repeats what the ghost said.

 That means we don't have access to our ghost, or do we?
 */

//example 3
console.log('------example 3------');


var myNew = (function f3() {
    var ghost3 = "I think I also have agoraphobia";

    return{
       getGhost :  function () {
        return ghost3
    }, whatDoesTheGhostSay: function(){
            console.log(ghost3)
        }
    }

    return displayName;
})();
myFunc();

//example 1
console.log('------example 1------');




