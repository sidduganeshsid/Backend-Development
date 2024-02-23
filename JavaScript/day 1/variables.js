// variable = place where data is stored.
// var is a keyword used to define the variables.

var name //just declared the variable
console.log(name);//undefined

var age = 22 //declared and initialized
console.log(age);

/**
 * Rules of naming variables
 * 1. a-z, A-Z , 0-9 , _ , $
 * 2.keywords (if, else, for...) can't be used for naming
 * 3.No space b/w variables naming is not allowed.
 * 
 * Guidelines/Suggestions
 * 1.Name has to be Meaning full
 * 
 * Observations
 * 1.They are case sensitive.
 */

var hobby
var Nationality
console.log(Nationality);
//////////
/**
 * In JavaScript, variables are used to store data values. They are containers for holding information that can be referenced and manipulated throughout the execution of a program. Here's a basic overview of variables in JavaScript:

### Declaration and Initialization:
You declare a variable in JavaScript using the `var`, `let`, or `const` keyword followed by the variable name. You can also initialize a variable at the time of declaration by assigning it a value.

```javascript
// Using var (global scope or function scope)
var x;
var name = "John";

// Using let (block scope)
let y;
let age = 30;

// Using const (constant value, cannot be reassigned)
const PI = 3.14;
```

### Naming Conventions:
- Variable names can include letters, digits, underscores, and dollar signs.
- They must begin with a letter, underscore, or dollar sign.
- Variable names are case-sensitive (`age` and `Age` are different variables).
- It's recommended to use meaningful and descriptive names for variables to make your code more readable.

### Data Types:
JavaScript is a dynamically-typed language, meaning you don't need to specify the data type when declaring a variable. The type of data a variable holds can change during the execution of a program.

Common data types include:
- **Primitive types**: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`
- **Composite types**: `object`

### Scope:
- Variables declared with `var` are function-scoped or globally-scoped if declared outside any function.
- Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined in (such as within a loop or if statement).

### Reassignment:
- Variables declared with `var` and `let` can be reassigned new values.
- Variables declared with `const` cannot be reassigned. However, for objects and arrays declared with `const`, their properties or elements can still be modified.

```javascript
let count = 10;
count = 20; // Reassignment is possible with let

const PI = 3.14;
// PI = 3.14159; // This will throw an error because PI is a constant and cannot be reassigned
```

Understanding variables is fundamental to writing JavaScript code, as they are used to store and manipulate data throughout your programs.
 */
