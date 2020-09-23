# JS-109 Written Assessment Study Notes

## Topics
The context of the topics in this document revolve around the JavaScript 
language.

### Assignments and comparison
This topic refers to the effects of the `=`, `==` and `===` **operators** on 
their operands.

The `=` operator is of the *assignment* type, it is used to give a variable or a
constant a value. For example:`let bar = 15` is assigning the number `15` to the
variable bar.

The `==` and the `===` operators are of type *comparison*, this operations are
used on it's operands to determine equality. The `==` operator has a slightly
different behavior than `===` one. The former is the non-strict equality
operator, it does implicit type coercion on one of its operands to the same type
of the other one and then does an equality comparison. The latter `===` is the
strict equality operator which checks for value and type equality on its 
operands, as opposed to just value comparison of the  `==` operator.

### Variable Scope
How variables interact with function definition and blocks.

Variable scope is all  about determining if a variable is available for
use/access
in the current execution context of a program.

#### Global Scope
Generally speaking global scope means that a variable will be accessible from anywhere in the program.
Although, global scope has different connotations depending on the runtime environment. In Node.js variables only have global scope in the current module, as opposed to the DOM on the browser in which a global variable is accessible from anywhere.

#### Local Scope

##### block scope
##### function scope

The are variables that can have global scope, meaning they can be accessed from 
anywhere in the scope chain. The `const` and `let` keywords give local scope to 
a variable when declared.

Code blocks that are enclosed by `{}` like `if` statements or function
declarations create a local scope for any variables declared and assigned within
those blocks.

Concepts like lower scope and upper scope are related to code blocks that are
up or low in the stack or execution context chain. these concepts are also 
referred to as the scope chain.


code in the current block, in contrast, variables in the higher scope can be
accessed by code in the current block.

### Primitive values, types and type conversions

Primitives values represent the most basic types that a language can have. They 
are the building blocks of the language and all of the more complex types in the
language, like custom ones.

Primitive values are called atomic values, they are immutable and indivisible.
Their values can be reassigned in variables, but they don't change.

Any operation performed on a primitive value returns a new primitive value.

Types are how we differentiate primitive values.

The JavaScript's primitive values are:
- number
- string
- Boolean
- Nan
- null
- undefined
- symbol

Types can be converted into other types, but not always. There are two types of
conversions: implicit and explicit.

Implicit conversion happens when the language automatically convert from one
type to another, it decides on itself which types to convert to. Implicit type
conversion is also called type coercion, because the conversion is forced by 
the language.

For example: 
```javascript
let str = '15';
let num = 15;

if (str == num) console.log('equal');
```
In order to do the comparison in the if statement, JavaScript implicitly 
coerce the string to a number, and because it will be converted form `'15'` to 
`15`, the console will print `'equal'`.

Explicit type conversion is when the programmer decides when and to what type 
to do the conversion to. The expected behavior is expressed directly in the 
code. `ParseInt('str')` Will return the value `15` as the `str` variable was 
explicitly converted from a string to a number.

### How passing an argument into a function may or may not permanently change the value that a variable contains or points to

One of the things What can determine if an argument may or may not be mutated 
within the function is the type of the argument itself.

Primitive values are passed as value to functions. When passed as value the 
parameter is nothing but a copy of the value of the argument passed on, meaning
that anything that happens to the parameter inside the function will not have
any effect on the original argument passed into the function.

Non-primitive types, such as Objects and arrays are passed by reference. When
passed by reference the parameter variable will not contain a copy of the value
passed on, instead it will point to the place in memory where the object lives.
The parameter will become a variable that references the same object that was 
passed on, meaning that this object can be mutated inside of a function.

### Working with Strings, Arrays and Objects
#### Strings 
Important string methods.
|Method Name | What it does |
| ---        | ---          |
|`str.split(<separator>)` | It will split the string by the provided separator and return its elements as an array.|
| `str.splice()`| It will return a new string by the provided indexes (beginning, end).|
| `str.concat(<string>)`|Join two strings together.|
| `str.includes(<string>)`|Returns true if the string provided exist within the string.|
| `str.trim()`|Remove white space from both ends of the string.|
| `str.chatAt(<index>)`|Acts like accessing an element in an array with brackets. Returns character at the index of the string.|
| `str.`||
| `str.`||
 
#### Objects 
Object Methods. How to access keys and values in an Object as an array.
|Method Name | What it does |
| ---        | ---          |
|`Object.values()`|Gets all the values of the object and returns them as an array.|
| `Object.keys()`|Gets all the keys of the object and returns them as an array.|
| `Object.entries()`|Gets all the [key, value] pairs if the object as an array.|
| `Object.asign(<objA> , <ObjB>)`|Merge object B into Object A, the A object is mutated the Object B is not.|

#### Arrays 
Array iteration methods like
|Method Name | What it does |
| ---        | ---          |
|`arr.forEeach((element, index, array) => {})`|Iterate through all the elements in the array, receives a callback function that is invoked for each element of the array|
| `arr.map((element, index, array) => {return newElement})`|Iterate through all elements of the array invoking per element a callback function that returns a new element per iteration and saves it into a new array that is returned by the map() method.|
| `arr.filter((element, index, array) => {return true || false})`|Iterate through all elements of the array invoking per element a callback function that expects a return value to evaluate in a boolean context, if `false` or 'falsy' do nothing, if `true` or 'truthy' it adds the element into the new array to be returned by the filter method, thus filtrating elements by their boolean evaluation of the return value of the callback.|
| `arr.find()`|Iterate through the array returning the first match that evaluates to `true` when comparing the value passed to the method and the current element in the iteration.|

### Understand that arrays are objects
Determine when or whether you have an array or not.

In JavaScript arrays are objects, however they cannot access object specific 
methods and proper objects cannot access array specific methods. This is relevant 
in a context in which the programmer needs to evaluate the type of the a variable
as arrays will evaluate as object. Also arrays can be assigned properties the 
same way proper objects do, however this properties are not considered to be 
part of the array proper, thus they will not be accessible by the build in 
method such as `forEach` or `map()`

One way to determine if an object is an array is to call the Static method
`Array.isArray(<array>)` which will return `true` if the object is an array proper and 
`false` if not.

I know there is another way, but I don't remember.

### Understand the concepts of pass by reference and pass by value

The pass by reference and pass by value concept is all about how are the values assigned to parameters in functions treated.

All arguments passed into a function or method that are primitive values are going to be passed by value. Being passed by value means that a copy of the 
contents of the arguments will be created and changes to this parameters will
not be reflected outside of the scope of the function.

In contrast Objects and arrays will be passed into a function by reference. When
passed by reference the parameters of the function will be variables that point
to same place in memory as the arguments outside of the function scope. If this
parameters that are pointer variables get mutated in any way, this changes will 
be reflected outside of the function scope.

### Truthiness: `false` and `true` vs. falsy and truthy

In JavaScript all values can be evaluated in a boolean context, truthiness is a 
word meant to differentiate the type of values being evaluated in such context. 

All values that are of the type `boolean` can be `true` or `false`, therefore we
refer to them as such. 

Any other value that is not of type `boolean` will be called `truthy` or `falsy`
based on what they evaluate to, if this values evaluate to `true` we called them
`truthy` and the same for `false` and `falsy`.

There are six values that will always evaluate to `false`, therefore they are
called falsy:
- "" (empty string)
- 0
- null
- undefined
- NaN
- false

The rest of values that are not of type boolean and evaluate to `true` are considered truthy.

### Functions
A function is a block of code meant to be used over and over.
A function block creates scope. Functions can receive arguments and can return
values.

#### Definition
Function definition is akin to variable declaration, in the sense that we are 
declaring/defining what our function is going to be called, parameter names 
(if any), return types, and the actual piece of functionally within.

However we should never say function declaration because in the JavaScript
context function declaration is a type of method definition. In other words a
function declaration is one of the 3 ways that we can define a function.

We as programmers use the term to indicate when we are performing 
such actions.

```javascript
function print(strInput) {
  console.log(strInput);
}
```
#### Invocation
Function invocation is all about "calling" or putting into action functions that have
already been defined.

We invoke function by their name, pass any necessary arguments and if there is 
any meaningful return value we save it into a variable or use it in an 
expression

```javascript
print("Hello, World!");
```

#### Declaration
Declaration is a way to define a function and it is the most conventional way
to do it in JavaScript.

```javascript
function print(strInput) {
  console.log(strInput);
}
```

#### Expression
This way of function definition is called expression because is used in
conjunction with the variable assignment operator, the function definition being on the right side of the 
expression.

```javascript
const print = (strInput) {
  console.log(strInput);
};
```

#### Arrow (functions)
Arrow functions are the third way of function definition, they are often called anonymous functions due
to the fact that they don't have a name.

If the function body has only statement it acts as the return value. There is no name to the function, only
parameters and after that, the arrow `=>`.

```javascript
() => true;
```

```javascript
(param1, param2) => {
  // Body goes here.
  return true;
};
```
### Implicit return value of function invocations
All function invocations return something. 
If no return value is provided in the body of the function during the definition JavaScript will implicitly 
return `undefined`.

### First class functions
The main characteristic of these functions is that they can be passed into other functions, be returned by
other functions and passed around as values saved in variables.

Higher order functions are functions that can take other functions as arguments, and return them. All higher
order functions are first class functions, but not all first class functions are higher order functions.

### Side-effects and pure functions
Side-effects refers to what happens in the body of a function.
Side-effects refers to the mutation of the arguments passed into a function invocation.

Pure functions are the ones that never mutate its arguments and also are deterministic, meaning, they will always return the same output out of the same input.

### Naming conventions
Js community has stylistic guidelines to make JS code easier to read and write.
Legal vs idiomatic

#### Legal
Variable names should always start with a letter or symbol, anything that is not a letter or a symbol is considered illegal and the runtime with show a syntax error. Number for example are not allowed as the beginning of a variable or function name.

After first character the variable can have any kind of symbol, but that does not meant that it should.

#### Idiomatic
Idiomatic names refer to naming conventions that conform to certain style guides or best practices.

All name should use alphabetic and numeric characters only.

In JavaScript the `camelCase` naming convention is used for naming variables and functions. 
```javascript
let myFirstVariable = 1;

function myFirstFunction() {
  // do something 
};
```
For constant values we use `SCREAMING_SNAKE_CASE`.






