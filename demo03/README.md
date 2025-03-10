# myTypescriptLearning
Documentation of my TS learnings

TS is a:
- superset of JS 
- strongly-typed
- compiles to standard JS
- runs everywhere the JS works

Things that I learned:

- Installation and project configuration

Cmd:-
npm i typescript --save dev
tsc init- initiates new ts file.

- Data types and syntax

- Functions 
it's declaration, various types of parameters(optional?, default and rest(it collects a group of parameters into a single array ... it denotes the rest parameter)), arrow functions(how to convert a normal function to an arrow function), function overloads.

- Unions
the unions help us to declare a variable which can be assigned more than one data type. symbol:- |

- Interfaces
+interfaces are used to define the shape of an object
+ Eg:-
// //Interfaces
// //first interface

// interface Person{
//     name:string;
//     age: number;
//     greet() : string;
// }

- Classes in TS
Classes in TypeScript are similar to those in JavaScript but with added type safety, access modifiers, and interfaces for better structure.
+class members-constructors,properties,methods
+it supports: inheritance,abstract classes, class expressions
+getter and setter functions: the getter function does not accepts any arguments and return type is also optional. the setter function should have exactly one parameter
+static keyword
if some variable is created with this keyword then that variable can be accessed on the class and not on the instance created. it does not vary across instances
+in TS public access modifier is default and not private
+abstract classes:
An abstract class in TypeScript serves as a blueprint for other classes.

- modules
+why use modules?
encapsulation, reusability and create higher level abstraction
learnt to organize the code using modules by splitting it into smaller, reusable files.
key leanings:
+exporting and importing files across other files in the same project
+default export and import
+syntax
+module resolution
relative and non-relative imports: relative imports directs at a specific location in the file system where the module can be found and non relative when referring to third party module

- Asynchronous Code in Ts
+Promises
+async/await

- Useful methods
+ map
+ filter
+ forEach
+ reduce
+ find
