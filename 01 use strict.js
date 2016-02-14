/**
 * Created by Athinodoros on 11/2/2016.
 */

/*
 The "use strict" literal is available since JavaScript 1.8.5 (ECMAScript 5)


 GENERAL
 --------
 It is not an expression but a literal.
 This literal will be ignored by older versions of Javascript.

 Using the "use strict" literal it will not allow to use undeclared variables or functions

 USE
 -------
 In the beginning of the Javascript file add :
 "use strict";
 */

//       -----------------
//       ----EXAMPLES-----
//       -----------------

"use strict";


x = 5;
console.log(x);
/*
 this will throw an error complaining that x is not defined
 if we didn't use the use strict literal the compiler would have created a
 global variable named x and would have given it the value 5 and it would continue
 to the next line of code.
 */
r = function tellMeSomething() {
    return "The LARS";
}
console.log(r());
/*
 The same would happen here ''normally'' it would have executed the function and
 would have printed The LARS on the console. but now it will complain that r is not defined.
 */

/*
To check my assumptions comment out the "use strict"; in line 26
 */